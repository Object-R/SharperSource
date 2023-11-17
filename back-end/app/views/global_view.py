# -*- coding:utf-8 -*-
import time
import os
import backblaze
from backblaze.settings import UploadSettings, PartSettings

from fastapi import status
from fastapi.responses import JSONResponse


class Global(object):
    def __init__(self):
        self.name = "Global"
    
    def resp_template(self, data, code, message):
        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={
                "code": code,
                "message": message,
                "data": data,
            }
        )
    
    def upload_file(self, form_data):
        _bucket_id = form_data.get("bucket_id")
        _bucket_name = form_data.get("bucket_name")
        _key_id = form_data.get("key_id")
        _key = form_data.get("key")
        _local_path = form_data.get("local_path")
        _local_file = form_data.get("local_file")

        client = backblaze.Blocking(
            key_id = _key_id,
            key = _key,
        )

        client.authorize()

        # small file
        # _start_time = time.time()
        # bucket = client.bucket(bucket_id=_bucket_id)
        # local_path = os.path.join(
        #     _local_path,
        #     _local_file
        # )
        # data, file = bucket.upload_file(
        #     settings=UploadSettings(_local_file),
        #     pathway=local_path,
        #     allow_parts=True,
        # )
        # _end_time = time.time()
        # client.close()

        # huge file
        _start_time = time.time()
        bucket = client.bucket(bucket_id=_bucket_id)
        _, file = bucket.create_part(PartSettings(
            name=_local_file
            
        ))
        parts = file.parts()
        parts.file(pathway="/".join([_local_path, _local_file]))
        parts.finish()
        _end_time = time.time()
        client.close()

        return self.resp_template(
            code=200,
            message="OK",
            data={
                "Action": "Upload",
                "BucketID": _bucket_id,
                "BucketName": _bucket_name,
                "File": _local_file,
                "Total second": round((_end_time - _start_time), 2),
            }    
        )


    def download_file(self, form_data):
        _key = form_data.get("key")
        _key_id = form_data.get("key_id")
        _bucket_id = form_data.get("bucket_id")
        _bucket_name = form_data.get("bucket_name")
        _remote_file = form_data.get("remote_file")
        _local_path = form_data.get("local_path")
        _local_file = form_data.get("local_file")

        client = backblaze.Blocking(
            key_id = _key_id,
            key = _key,
        )

        client.authorize()

        _start_time = time.time()

        data = client.download_by_name(bucket_name=_bucket_name, file_name=_remote_file)
        with open(_local_path + "/" + _local_file, "w") as f:
            f.write(str(data, encoding = "utf-8"))
        
        _end_time = time.time()

        client.close()

        return self.resp_template(
            code=200,
            message="OK",
            data={
                "Action": "Download",
                "BucketID": _bucket_id,
                "BucketName": _bucket_name,
                "File": _local_file,
                "Total second": round((_end_time - _start_time), 2),
            }    
        )

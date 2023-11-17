# -*- coding:utf-8 -*-
import os
import sys
import json
import time

import backblaze
from backblaze.settings import UploadSettings, PartSettings

if __name__ == "__main__":
    json_data = sys.argv[1]
    data = json.loads(json_data)

    _start_time = time.time()

    if data.get("command") == "download":
        _bucket_name = data.get("bucket_name")
        _key_id = data.get("key_id")
        _key = data.get("key")
        _local_path = data.get("local_path")
        _local_file = data.get("local_file")
        _remote_file = data.get("remote_file")

        client = backblaze.Blocking(
            key_id = _key_id,
            key = _key,
        )
        client.authorize()

        res_data = client.download_by_name(bucket_name=_bucket_name, file_name=_remote_file)
        with open(_local_path + "/" + _local_file, "w") as f:
            f.write(str(res_data, encoding = "utf-8"))

        client.close()

    elif data.get("command") == "upload":
        _bucket_id = data.get("bucket_id")
        _bucket_name = data.get("bucket_name")
        _key_id = data.get("key_id")
        _key = data.get("key")
        _local_path = data.get("local_path")
        _local_file = data.get("local_file")

        client = backblaze.Blocking(
            key_id = _key_id,
            key = _key,
        )

        client.authorize()

        # small file
        _start_time = time.time()
        bucket = client.bucket(bucket_id=_bucket_id)
        local_path = os.path.join(
            _local_path,
            _local_file
        )
        res_data, file = bucket.upload_file(
            settings=UploadSettings(_local_file),
            pathway=local_path,
            allow_parts=True,
        )
        _end_time = time.time()
        client.close()

        # huge file
        # _start_time = time.time()
        # bucket = client.bucket(bucket_id=_bucket_id)
        # _, file = bucket.create_part(PartSettings(
        #     name=_local_file
            
        # ))
        # parts = file.parts()
        # parts.file(pathway="/".join([_local_path, _local_file]))
        # parts.finish()
        # _end_time = time.time()
        # client.close()

    _end_time = time.time()

    print({
        "Action": data.get("command"),
        "BucketID": data.get("bucket_id"),
        "BucketName": data.get("bucket_name"),
        "File": data.get("local_file"),
        "Total second": round((_end_time - _start_time), 2),
    })

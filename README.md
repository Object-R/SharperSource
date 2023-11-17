### Build Image
```bash
docker build -t global:v1 .
```

### Upload
```json
{
    "command": "upload", 
    "key_id": "005ee0e00cd013d0000000001", 
    "key": "K005gWGbOdIj+qMIkOr4ObQ8wVwEMnk", 
    "bucket_id": "fe3ef00e2040ec0d8091031d", 
    "bucket_name": "Global-bucket", 
    "remote_file": "data.txt", 
    "local_path": "/root/upload", 
    "local_file": "data.txt"
}
```

### Download
```json
{
    "command": "download",
    "bucket_id": "fe3ef00e2040ec0d8091031d",
    "bucket_name": "Global-bucket",
    "key_id": "005ee0e00cd013d0000000001",
    "key": "K005gWGbOdIj+qMIkOr4ObQ8wVwEMnk",
    "remote_file": "data.txt",
    "local_path": "/root/download",
    "local_file": "data.txt",
}
```

# -*- coding:utf-8 -*-
from typing import Annotated
from fastapi import APIRouter,Form
from starlette.requests import Request

from app.views.global_view import Global


router = APIRouter(
    prefix="/global-back",
    tags=["Global"],
    responses={
        404: {"description": "Not found"}
    },
)

@router.post("/upload")
def upload_file(
    request: Request,
    command: Annotated[str, Form()],
    key_id: Annotated[str, Form()],
    key: Annotated[str, Form()],
    bucket_id: Annotated[str, Form()],
    bucket_name: Annotated[str, Form()],
    remote_file: Annotated[str, Form()],
    local_path: Annotated[str, Form()],
    local_file: Annotated[str, Form()],
):
    form_data = {
        "command": command,
        "key_id": key_id,
        "key": key,
        "bucket_id": bucket_id,
        "bucket_name": bucket_name,
        "remote_file": remote_file,
        "local_path": local_path,
        "local_file": local_file,
    }
    return Global().upload_file(form_data)

@router.post("/download")
def download_file(
    request: Request,
    command: Annotated[str, Form()],
    key_id: Annotated[str, Form()],
    key: Annotated[str, Form()],
    bucket_id: Annotated[str, Form()],
    bucket_name: Annotated[str, Form()],
    remote_file: Annotated[str, Form()],
    local_path: Annotated[str, Form()],
    local_file: Annotated[str, Form()],
):
    form_data = {
        "command": command,
        "key_id": key_id,
        "key": key,
        "bucket_id": bucket_id,
        "bucket_name": bucket_name,
        "remote_file": remote_file,
        "local_path": local_path,
        "local_file": local_file,
    }
    return Global().download_file(form_data)

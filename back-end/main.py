# -*- coding:utf-8 -*-
import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates

from app.controllers import global_ctl

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=False,
)

templates = Jinja2Templates(directory="./templates")


if __name__ == "__main__":
    app.include_router(global_ctl.router)
    uvicorn.run(app, host="0.0.0.0", port=8082)

__author__ = 'Ross Hattori <git@exstasis.net>'

import logging
from dataimport import util

ENVIRONMENT = 'DEV'
LOGGER = logging.getLogger(__name__)

DATA_IMPORT_DIR = "input_data"
DATA_IMPORT_PATH = util.get_path_from_project_root(DATA_IMPORT_DIR)
DATA_EXPORT_DIR = ("resources", "data")
DATA_EXPORT_PATH = util.get_path_from_project_root(*DATA_EXPORT_DIR)
DB_NAME = "data.sqlite"

TOPICS_XLS_COLUMN_MAPPING = {
    # XLS column name : DB column
    "KEYWORD": "keyword",
    "TITLE"  : "title",
    "QUOTE"  : "quote",
    "CONTENT": "content",
    "PARENT" : "parent"
}



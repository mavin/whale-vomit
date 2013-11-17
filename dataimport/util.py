__author__ = 'Ross Hattori <git@exstasis.net>'
"""
Small utitlity functions that don't fit nicely into another set of methods.
"""
from os import path


def get_module_path():
    return path.dirname(path.abspath(__file__))


def get_project_path():
    return path.dirname(get_module_path())


def get_path_from_project_root(*args):
    return path.join(get_project_path(), *args)
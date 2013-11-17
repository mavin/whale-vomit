__author__ = 'Ross Hattori <git@exstasis.net>'

import os
import xlrd
import collections
import dataimport.settings as settings

log = settings.LOGGER


class Xls(object):
    """
    A basic Microsoft Excel importer and exporter.

    TODO: write a default file based upon the settings

    """
    def __init__(self, name_mapping, filename=None):
        self._name_map = name_mapping
        self._field_list = name_mapping.values()
        self._in_file = filename or "%s/input.xls" % settings.DATA_IMPORT_PATH
        self._column_value_lists = None
        with xlrd.open_workbook(self._in_file) as book:
            sheet = book.sheet_by_index(0)
            header_row = sheet.row(0)
            col_map = {}
            for i, cell in enumerate(header_row):
                if cell.value in self._name_map:
                    prop_name = self._name_map[cell.value]
                    col_map[prop_name] = sheet.col_values(i, start_rowx=1)
            self._column_value_lists = col_map

    @property
    def name_map(self):
        return self._name_map

    @property
    def column_values(self):
        return self._column_value_lists

    @property
    def row_object_generator(self):
        """
        Returns an iterator of namedtuples for rows
        """
        column_names = self._field_list
        ordered_column_value_lists = [
            self.column_values[name] for name in column_names
        ]
        XlsTuple = collections.namedtuple("XlsTuple", column_names)
        for tup in zip(*ordered_column_value_lists):
            yield XlsTuple(*tup)
        return


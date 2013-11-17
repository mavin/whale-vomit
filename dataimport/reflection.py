__author__ = 'Ross Hattori <git@exstasis.net>'


class ValidateMixin(object):
    """
    Creates a validate method that looks for methods in the class starting
    with "_validate_*" to store business logic around the different fields
    of the ORM classes.
    """

    def validate(self, prefix="_validate_"):
        """
        Get the local method dic, find all methods with the prefix, and run
        them.
        :return:
        """
        pass

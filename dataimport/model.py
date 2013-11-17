__author__ = "Ross Hattori <git@exstasis.net>"
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import (
    Table, Column, ForeignKey, UniqueConstraint,
    Integer, String, Text, DateTime, Boolean
)
from sqlalchemy.orm import relationship, backref
from datetime import datetime

Base = declarative_base()

"""
Logical Model:
Topics (0-1)<-->(0-n) Topics (hierarchy)
Topics (1-n)<-->(0-n) Resources
Versions (1)<-->(0-n) Topics (last modified)
Versions (1)<-->(0-n) Resources (last modified)
"""

# Association table for Topics to Resources
topics_resources = Table(
    "topics_resources", Base.metadata,
    Column("topic_keyword", String, ForeignKey("topics.keyword")),
    Column("resource_id", Integer, ForeignKey("resources.id"))
    # TODO: Add UniqueConstraints and Indexes
)


class Topic(Base):
    """
    Topics are the categories that we use to organize Resources as well as
    tags that we use to signify properties of Resources. Topics can be nested
    to create a parent-child relationship but they should only be nested a
    single level.

    Topics can have a single parent Topic.
    Topics can have zero to many Resources.
    Topics must have a single Version.
    """
    __tablename__ = "topics"

    keyword = Column(String, primary_key=True)
    # A human readable, lowercase field used for display
    title = Column(String, unique=True)
    # A snippet of text giving an overview of the topic
    quote = Column(Text)
    # The main content of the topic, formatted in html
    content = Column(Text)

    # Metadata around the topic
    parent_keyword = Column(String, ForeignKey("topics.keyword"),
                            nullable=True)
    version_id = Column(Integer, ForeignKey("versions.id"))
    deleted = Column(Boolean, default=False, nullable=False)

    # Relationships
    child_topics = relationship("Topic")
    resources = relationship("Resource", secondary=topics_resources,
                             backref="topics")

    # TODO: Add UniqueConstraints and Indexes

    def __repr__(self):
        return "<Topic(' %s ')>" % self.keyword


class Resource(Base):
    """
    Resource is a simplified term we use to represent a location that single
    agency can operate multiple programs from. It includes contact information
    and descriptions of the the programs. We also choose to keep some metadata
    that isn't displayed to the users that we hope to use in the future for
    analytics.

    Resources can have one to many Topics.
    Resources must have a single Version.
    """
    __tablename__ = "resources"

    # TODO: Comment the columns for Resource
    id = Column(Integer, primary_key=True)
    title = Column(String)
    subtitle = Column(String)
    phone = Column(String)
    website = Column(String)
    address1 = Column(String)
    address2 = Column(String)
    city = Column(String)
    state = Column(String)
    zip = Column(Integer)
    eligibility = Column(Text)
    description = Column(Text)

    agency_name = Column(String)
    agency_id = Column(Integer)
    service_name = Column(String)
    service_id = Column(Integer)
    mapped = Column(Boolean)
    version_id = Column(Integer, ForeignKey("versions.id"))
    deleted = Column(Boolean, default=False, nullable=False)

    # TODO: Add UniqueConstraints and Indexes

    def __repr__(self):
        return "<Resource(' %s : %s : %s ')>" % \
               (self.id, self.title, self.subtitle)


class Version(Base):
    """
    Versions are basically just dates with a bit of metadata attached. The
    use case we see with updates are batch; this ORM uses session so we can
    create a single datetime that each update/create/delete can reference for
    the entire batch.

    Since we don't have any need for datetime to be super precise,
    just unique, we punt it to the database to handle the details and
    reference it with an integer pk.
    """
    __tablename__ = "versions"

    # TODO: Comment the columns for Version
    id = Column(Integer, primary_key=True)
    version = Column(DateTime, nullable=False, unique=True)
    update_type = Column(String, nullable=False)

    # Relationships
    modified_topics = relationship(Topic, backref("version"))
    modified_resources = relationship(Resource, backref("version"))

    # TODO: Add UniqueConstraints and Indexes

    def __init__(self, update_type="batch"):
        self.version = datetime.now()
        self.update_type = update_type

    def __repr__(self):
        return "<Version(' %s : %s : %s ')>" % \
               (self.id, self.version, self.update_type)

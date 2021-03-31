from datahub.ingestion.api.registry import Registry
from datahub.ingestion.api.sink import Sink

sink_registry = Registry[Sink]()
sink_registry.load('datahub.ingestion.sink', Sink)
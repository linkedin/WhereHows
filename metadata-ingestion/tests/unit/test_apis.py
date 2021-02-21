import inspect

from datahub.ingestion.sink.sink_registry import sink_registry
from datahub.ingestion.source.source_registry import source_registry


def test_sources_not_abstract():
    for cls in source_registry._mapping.values():
        assert not inspect.isabstract(cls)


def test_sinks_not_abstract():
    for cls in sink_registry._mapping.values():
        assert not inspect.isabstract(cls)

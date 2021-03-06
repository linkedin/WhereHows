package com.linkedin.metadata.utils.elasticsearch;

import com.linkedin.data.template.RecordTemplate;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import org.apache.commons.lang3.StringUtils;


// Default implementation of search index naming convention
public class IndexConventionImpl implements IndexConvention {
  private final Map<Class<? extends RecordTemplate>, String> indexNameMapping = new HashMap<>();
  private final Optional<String> _prefix;

  public IndexConventionImpl(@Nullable String prefix) {
    _prefix = StringUtils.isEmpty(prefix) ? Optional.empty() : Optional.of(prefix);
  }

  private String createIndexName(Class<? extends RecordTemplate> documentClass) {
    return _prefix.map(prefix -> prefix + "_").orElse("") + documentClass.getSimpleName().toLowerCase();
  }

  @Nonnull
  @Override
  public String getIndexName(Class<? extends RecordTemplate> documentClass) {
    return indexNameMapping.computeIfAbsent(documentClass, this::createIndexName);
  }
}

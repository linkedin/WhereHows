(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(163),r=a(164),o=(a(0),a(165)),i={title:"Strongly Consistent Secondary Index",hide_title:!0,slug:"/how/scsi-onboarding-guide",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/scsi-onboarding-guide.md"},s={unversionedId:"docs/how/scsi-onboarding-guide",id:"docs/how/scsi-onboarding-guide",isDocsHomePage:!1,title:"Strongly Consistent Secondary Index",description:"How to onboard to Strongly Consistent Secondary Index (SCSI)?",source:"@site/genDocs/docs/how/scsi-onboarding-guide.md",slug:"/how/scsi-onboarding-guide",permalink:"/docs/how/scsi-onboarding-guide",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/scsi-onboarding-guide.md",version:"current",sidebar:"overviewSidebar",previous:{title:"High Cardinality Relationships",permalink:"/docs/advanced/high-cardinality"},next:{title:"Configuring Kafka",permalink:"/docs/how/kafka-config"}},l=[{value:"1. Create urn path extractor for your entity",id:"1-create-urn-path-extractor-for-your-entity",children:[]},{value:"2. Add appropriate docker environment variable to enable SCSI for your entity",id:"2-add-appropriate-docker-environment-variable-to-enable-scsi-for-your-entity",children:[]},{value:"3. Enable SCSI in local DAO",id:"3-enable-scsi-in-local-dao",children:[]},{value:"4. Define Storage Config and use while instantiating your DAO",id:"4-define-storage-config-and-use-while-instantiating-your-dao",children:[]},{value:"5. Bootstrap index table for existing urns",id:"5-bootstrap-index-table-for-existing-urns",children:[]},{value:"6. Add finder method at the resource level",id:"6-add-finder-method-at-the-resource-level",children:[]},{value:"Testing your changes with some sample API calls",id:"testing-your-changes-with-some-sample-api-calls",children:[{value:"Get list of dataset urns",id:"get-list-of-dataset-urns",children:[]},{value:"Get list of dataset urns after a given urn",id:"get-list-of-dataset-urns-after-a-given-urn",children:[]},{value:"Get all datasets along with aspects <code>Status</code> and <code>Ownership</code> (if they exist)",id:"get-all-datasets-along-with-aspects-status-and-ownership-if-they-exist",children:[]},{value:"Testing the Storage Config:",id:"testing-the-storage-config",children:[]},{value:"Get all dataset urns that are non-removed i.e. <code>removed=false</code>",id:"get-all-dataset-urns-that-are-non-removed-ie-removedfalse",children:[]}]}],d={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-to-onboard-to-strongly-consistent-secondary-index-scsi"},"How to onboard to Strongly Consistent Secondary Index (SCSI)?"),Object(o.b)("h2",{id:"1-create-urn-path-extractor-for-your-entity"},"1. Create urn path extractor for your entity"),Object(o.b)("p",null,"This is to provide the parts of urn that need to be indexed as well as the logic to obtain the same from the urn. Refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/urn/dataset/DatasetUrnPathExtractor.java"},"DatasetUrnPathExtractor")," as an example."),Object(o.b)("h2",{id:"2-add-appropriate-docker-environment-variable-to-enable-scsi-for-your-entity"},"2. Add appropriate docker environment variable to enable SCSI for your entity"),Object(o.b)("p",null,"Enable SCSI by adding your variable in docker environment ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms/env/docker.env"},"file")," of datahub-gms. Each entity has it's own environment variable. If corresponding variable of your entity is already defined in the docker environment file, then make sure it is set (in order to enable SCSI)."),Object(o.b)("h2",{id:"3-enable-scsi-in-local-dao"},"3. Enable SCSI in local DAO"),Object(o.b)("p",null,"Import the docker environment variable in your local DAO factory to enable SCSI. Refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/factories/src/main/java/com/linkedin/gms/factory/dataset/DatasetDaoFactory.java"},"DatasetDaoFactory")," as an example."),Object(o.b)("h2",{id:"4-define-storage-config-and-use-while-instantiating-your-dao"},"4. Define Storage Config and use while instantiating your DAO"),Object(o.b)("p",null,"Other than the urn parts, you may want to index certain fields of an aspect. The indexable fields of aspects of a given entity are configured in a file in JSON format which must be provided during your local DAO instantiation. Refer to the storage config for ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/factories/src/main/resources/datasetStorageConfig.json"},"dataset"),"."),Object(o.b)("h2",{id:"5-bootstrap-index-table-for-existing-urns"},"5. Bootstrap index table for existing urns"),Object(o.b)("p",null,"If you have already enabled SCSI then the write path will ensure that every new urn inserted into the primary document store (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"metadata_aspect")," table), also gets inserted into the index table. However for urns that already exist in the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata_aspect")," table, you will need to bootstrap the index table. Refer to the bootstrap ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/database/scripts/index/dataset-bootstrap.sql"},"script")," for datasets as an example."),Object(o.b)("h2",{id:"6-add-finder-method-at-the-resource-level"},"6. Add finder method at the resource level"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub-gma/blob/master/restli-resources/src/main/java/com/linkedin/metadata/restli/BaseEntityResource.java"},"BaseEntityResource")," currently exposes Finder resource method called filter that returns a list of entities that satisfy the filter conditions specified in query parameters. Please refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/resources/dataset/Datasets.java"},"Datasets")," resource to understand how to override the filter method.\nOnce you have the resource method defined, you could as well expose client methods that take different input arguments. Please refer to listUrnsFromIndex and filter methods in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/client/src/main/java/com/linkedin/dataset/client/Datasets.java"},"Datasets")," client for reference."),Object(o.b)("p",null,"Once you have onboarded to SCSI for your entity, you can test the changes as described below"),Object(o.b)("h2",{id:"testing-your-changes-with-some-sample-api-calls"},"Testing your changes with some sample API calls"),Object(o.b)("p",null,"For the steps below, we assume you have already enabled SCSI by following the steps mentioned above."),Object(o.b)("p",null,"Run the ingestion script if you haven't already using"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"```\n./docker/ingestion/ingestion.sh\n```\n")),Object(o.b)("p",null,"Connect to the MySQL server and you should be able to see the records."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"mysql> select * from metadata_index;\n+----+--------------------------------------------------------------------+------------------------------------+------------------------+---------+---------------------------+-----------+\n| id | urn                                                                | aspect                             | path                   | longVal | stringVal                 | doubleVal |\n+----+--------------------------------------------------------------------+------------------------------------+------------------------+---------+---------------------------+-----------+\n|  1 | urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD) | com.linkedin.common.urn.DatasetUrn | /platform/platformName |    NULL | kafka                     |      NULL |\n|  2 | urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD) | com.linkedin.common.urn.DatasetUrn | /origin                |    NULL | PROD                      |      NULL |\n|  3 | urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD) | com.linkedin.common.urn.DatasetUrn | /datasetName           |    NULL | SampleKafkaDataset        |      NULL |\n|  4 | urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD) | com.linkedin.common.urn.DatasetUrn | /platform              |    NULL | urn:li:dataPlatform:kafka |      NULL |\n|  5 | urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /platform/platformName |    NULL | hdfs                      |      NULL |\n|  6 | urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /origin                |    NULL | PROD                      |      NULL |\n|  7 | urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /datasetName           |    NULL | SampleHdfsDataset         |      NULL |\n|  8 | urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /platform              |    NULL | urn:li:dataPlatform:hdfs  |      NULL |\n|  9 | urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /platform/platformName |    NULL | hive                      |      NULL |\n| 10 | urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /origin                |    NULL | PROD                      |      NULL |\n| 11 | urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /datasetName           |    NULL | SampleHiveDataset         |      NULL |\n| 12 | urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /platform              |    NULL | urn:li:dataPlatform:hive  |      NULL |\n+----+--------------------------------------------------------------------+------------------------------------+------------------------+---------+---------------------------+-----------+\n12 rows in set (0.01 sec)\n")),Object(o.b)("p",null,"In the following section we will try some API calls, now that the urn parts are ingested"),Object(o.b)("h3",{id:"get-list-of-dataset-urns"},"Get list of dataset urns"),Object(o.b)("p",null,"Note that the results are paginated"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'curl "http://localhost:8080/datasets?q=filter&aspects=List()" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "elements": [\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)",\n      "origin": "PROD",\n      "name": "SampleHdfsDataset",\n      "platform": "urn:li:dataPlatform:hdfs"\n    },\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n      "origin": "PROD",\n      "name": "SampleHiveDataset",\n      "platform": "urn:li:dataPlatform:hive"\n    },\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)",\n      "origin": "PROD",\n      "name": "SampleKafkaDataset",\n      "platform": "urn:li:dataPlatform:kafka"\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "links": []\n  }\n}\n')),Object(o.b)("h3",{id:"get-list-of-dataset-urns-after-a-given-urn"},"Get list of dataset urns after a given urn"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'curl "http://localhost:8080/datasets?q=filter&aspects=List()&urn=urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Ahdfs%2CSampleHdfsDataset%2CPROD%29" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "elements": [\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n      "origin": "PROD",\n      "name": "SampleHiveDataset",\n      "platform": "urn:li:dataPlatform:hive"\n    },\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)",\n      "origin": "PROD",\n      "name": "SampleKafkaDataset",\n      "platform": "urn:li:dataPlatform:kafka"\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "links": []\n  }\n}\n')),Object(o.b)("h3",{id:"get-all-datasets-along-with-aspects-status-and-ownership-if-they-exist"},"Get all datasets along with aspects ",Object(o.b)("inlineCode",{parentName:"h3"},"Status")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"Ownership")," (if they exist)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'curl "http://localhost:8080/datasets?q=filter&aspects=List(com.linkedin.common.Status,com.linkedin.common.Ownership)" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "elements": [\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)",\n      "ownership": {\n        "owners": [\n          {\n            "owner": "urn:li:corpuser:jdoe",\n            "type": "DATAOWNER"\n          },\n          {\n            "owner": "urn:li:corpuser:datahub",\n            "type": "DATAOWNER"\n          }\n        ],\n        "lastModified": {\n          "actor": "urn:li:corpuser:jdoe",\n          "time": 1581407189000\n        }\n      },\n      "origin": "PROD",\n      "name": "SampleHdfsDataset",\n      "platform": "urn:li:dataPlatform:hdfs"\n    },\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)",\n      "ownership": {\n        "owners": [\n          {\n            "owner": "urn:li:corpuser:jdoe",\n            "type": "DATAOWNER"\n          },\n          {\n            "owner": "urn:li:corpuser:datahub",\n            "type": "DATAOWNER"\n          }\n        ],\n        "lastModified": {\n          "actor": "urn:li:corpuser:jdoe",\n          "time": 1581407189000\n        }\n      },\n      "origin": "PROD",\n      "name": "SampleHiveDataset",\n      "platform": "urn:li:dataPlatform:hive"\n    },\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)",\n      "ownership": {\n        "owners": [\n          {\n            "owner": "urn:li:corpuser:jdoe",\n            "type": "DATAOWNER"\n          },\n          {\n            "owner": "urn:li:corpuser:datahub",\n            "type": "DATAOWNER"\n          }\n        ],\n        "lastModified": {\n          "actor": "urn:li:corpuser:jdoe",\n          "time": 1581407189000\n        }\n      },\n      "origin": "PROD",\n      "name": "SampleKafkaDataset",\n      "platform": "urn:li:dataPlatform:kafka"\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "links": []\n  }\n}\n')),Object(o.b)("h3",{id:"testing-the-storage-config"},"Testing the Storage Config:"),Object(o.b)("p",null,"The storage config for datasets looks like the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "aspectStorageConfigMap": {\n    "com.linkedin.common.Status": {\n      "pathStorageConfigMap": {\n        "/removed": {\n          "strongConsistentSecondaryIndex": true\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,"which means that the ",Object(o.b)("inlineCode",{parentName:"p"},"removed")," field of ",Object(o.b)("inlineCode",{parentName:"p"},"Status")," aspect should be indexed in SCSI.\nNone of the dataset urns ingested so far, has a ",Object(o.b)("inlineCode",{parentName:"p"},"Status")," aspect. Let us try to ingest a new dataset, with several metadata aspects including the ",Object(o.b)("inlineCode",{parentName:"p"},"Status")," aspect"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'curl \'http://localhost:8080/datasets?action=ingest\' -X POST -H \'X-RestLi-Protocol-Version:2.0.0\' --data \'{"snapshot": {"aspects":[{"com.linkedin.common.Ownership":{"owners":[{"owner":"urn:li:corpuser:fbar","type":"DATAOWNER"}],"lastModified":{"time":0,"actor":"urn:li:corpuser:fbar"}}},{"com.linkedin.common.Status":{"removed":false}},{"com.linkedin.schema.SchemaMetadata":{"schemaName":"FooEvent","platform":"urn:li:dataPlatform:foo","version":0,"created":{"time":0,"actor":"urn:li:corpuser:fbar"},"lastModified":{"time":0,"actor":"urn:li:corpuser:fbar"},"hash":"","platformSchema":{"com.linkedin.schema.KafkaSchema":{"documentSchema":"{\\"type\\":\\"record\\",\\"name\\":\\"MetadataChangeEvent\\",\\"namespace\\":\\"com.linkedin.mxe\\",\\"doc\\":\\"Kafka event for proposing a metadata change for an entity.\\",\\"fields\\":[{\\"name\\":\\"auditHeader\\",\\"type\\":{\\"type\\":\\"record\\",\\"name\\":\\"KafkaAuditHeader\\",\\"namespace\\":\\"com.linkedin.avro2pegasus.events\\",\\"doc\\":\\"Header\\"}}]}"}},"fields":[{"fieldPath":"foo","description":"Bar","nativeDataType":"string","type":{"type":{"com.linkedin.schema.StringType":{}}}}]}}],"urn":"urn:li:dataset:(urn:li:dataPlatform:presto,SamplePrestoDataset,PROD)"}}\'\n')),Object(o.b)("p",null,"You should be able to see the urn parts of the newly ingested urn in the index table, along with the ",Object(o.b)("inlineCode",{parentName:"p"},"removed")," field of ",Object(o.b)("inlineCode",{parentName:"p"},"Status")," aspect."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"mysql> select * from metadata_index;\n+----+----------------------------------------------------------------------+------------------------------------+------------------------+---------+----------------------------+-----------+\n| id | urn                                                                  | aspect                             | path                   | longVal | stringVal                  | doubleVal |\n+----+----------------------------------------------------------------------+------------------------------------+------------------------+---------+----------------------------+-----------+\n|  1 | urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /platform/platformName |    NULL | kafka                      |      NULL |\n|  2 | urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /origin                |    NULL | PROD                       |      NULL |\n|  3 | urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /datasetName           |    NULL | SampleKafkaDataset         |      NULL |\n|  4 | urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)   | com.linkedin.common.urn.DatasetUrn | /platform              |    NULL | urn:li:dataPlatform:kafka  |      NULL |\n|  5 | urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)     | com.linkedin.common.urn.DatasetUrn | /platform/platformName |    NULL | hdfs                       |      NULL |\n|  6 | urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)     | com.linkedin.common.urn.DatasetUrn | /origin                |    NULL | PROD                       |      NULL |\n|  7 | urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)     | com.linkedin.common.urn.DatasetUrn | /datasetName           |    NULL | SampleHdfsDataset          |      NULL |\n|  8 | urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)     | com.linkedin.common.urn.DatasetUrn | /platform              |    NULL | urn:li:dataPlatform:hdfs   |      NULL |\n|  9 | urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)     | com.linkedin.common.urn.DatasetUrn | /platform/platformName |    NULL | hive                       |      NULL |\n| 10 | urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)     | com.linkedin.common.urn.DatasetUrn | /origin                |    NULL | PROD                       |      NULL |\n| 11 | urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)     | com.linkedin.common.urn.DatasetUrn | /datasetName           |    NULL | SampleHiveDataset          |      NULL |\n| 12 | urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)     | com.linkedin.common.urn.DatasetUrn | /platform              |    NULL | urn:li:dataPlatform:hive   |      NULL |\n| 13 | urn:li:dataset:(urn:li:dataPlatform:presto,SamplePrestoDataset,PROD) | com.linkedin.common.urn.DatasetUrn | /platform/platformName |    NULL | presto                     |      NULL |\n| 14 | urn:li:dataset:(urn:li:dataPlatform:presto,SamplePrestoDataset,PROD) | com.linkedin.common.urn.DatasetUrn | /origin                |    NULL | PROD                       |      NULL |\n| 15 | urn:li:dataset:(urn:li:dataPlatform:presto,SamplePrestoDataset,PROD) | com.linkedin.common.urn.DatasetUrn | /datasetName           |    NULL | SamplePrestoDataset        |      NULL |\n| 16 | urn:li:dataset:(urn:li:dataPlatform:presto,SamplePrestoDataset,PROD) | com.linkedin.common.urn.DatasetUrn | /platform              |    NULL | urn:li:dataPlatform:presto |      NULL |\n| 17 | urn:li:dataset:(urn:li:dataPlatform:presto,SamplePrestoDataset,PROD) | com.linkedin.common.Status         | /removed               |    NULL | false                      |      NULL |\n+----+----------------------------------------------------------------------+------------------------------------+------------------------+---------+----------------------------+-----------+\n17 rows in set (0.00 sec)\n")),Object(o.b)("p",null,"Next, let's try some API calls to test the filter conditions."),Object(o.b)("h3",{id:"get-all-dataset-urns-that-are-non-removed-ie-removedfalse"},"Get all dataset urns that are non-removed i.e. ",Object(o.b)("inlineCode",{parentName:"h3"},"removed=false")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'curl "http://localhost:8080/datasets?q=filter&aspects=List()&filter=(criteria:List((aspect:com.linkedin.common.Status,pathParams:(path:%2Fremoved,value:("boolean":false)))))" -X GET -H \'X-RestLi-Protocol-Version: 2.0.0\' -H \'X-RestLi-Method: finder\' | jq\n\n{\n  "elements": [\n    {\n      "urn": "urn:li:dataset:(urn:li:dataPlatform:presto,SamplePrestoDataset,PROD)",\n      "origin": "PROD",\n      "name": "SamplePrestoDataset",\n      "platform": "urn:li:dataPlatform:presto"\n    }\n  ],\n  "paging": {\n    "count": 10,\n    "start": 0,\n    "links": []\n  }\n}\n')),Object(o.b)("p",null,"You can try similar API calls to return metadata aspects of urns that meet the filter criteria."))}c.isMDXComponent=!0},163:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},164:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=n,f=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return a?r.a.createElement(f,s(s({ref:t},d),{},{components:a})):r.a.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
# Quest 18. 서비스의 운영 (2): 로깅과 Elasticsearch

## Introduction
* 이번 퀘스트에서는 서비스의 운영을 위해 로그를 스트리밍하는 법에 대해 다루겠습니다.

## Topics
* ElasticSearch
* AWS ElasticSearch Service

## Resources
* https://www.elastic.co/kr/what-is/elasticsearch
* https://www.elastic.co/kr/webinars/getting-started-elasticsearch
* https://grafana.com/docs/grafana/latest/panels/

## Checklist
* ElasticSearch는 어떤 DB인가요? 기존의 RDB와 어떻게 다르고 어떤 장단점을 가지고 있나요?  
  
  먼저, ElasticSearch는 Apache Lucene 기반의 java 오픈소스 분산 검색 엔진입니다. "데이터 저장소" 가 아니라, MySQL같은 데이터베이스를 대체할 수 없습니다. 방대한 양의 데이터를 신속하고 거의 실시간으로 저장,검색,분석할 수 있습니다.  
  ElasticSearch의 핵심 개념은 클러스터, 노드, 인덱스, 타입, 도큐먼트, 샤드 & 레플리카 등으로 나누어 집니다.  
    
  <클러스터>  
  클러스터는 하나 이상의 노드(서버)가 모인 것이며, 이를 통해 전체 데이터를 저장하고 모든 노드를 포관하는 통합 색인화 및 검색 기능을 제공합니다. 클러스터는 고유한 이름으로 식별 되는데, 기본 이름은 "elasticsearch" 입니다. 어떤 노드가 어느 클러스터에 포함되기 위해서는 이름에 의해 클러스터의 구성원이 되도록 설정되기 때문에 이 이름은 매우 중요합니다. 노드가 잘못된 클러스터에 포함될 위험이 있으므로 동일한 클러스터 이름을 서로 다른 환경에서 재사용하면 안됩니다. 예를 들어 개발, 스테이징, 프로덕션 클러스터에 logging-dev, logging-stage, logging-prod라는 이름을 사용해야 합니다. 클러스터에 하나의 노드만 있는 것은 유효하며 또한 각자 고유한 클러스터 이름을 가진 독립적인 클러스터를 여러개 둘 수 도 있습니다.  
    
  <노드> 
  노드는 클러스터에 포함된 단일 서버로서 데이터를 저장하고 클러스터의 색인화 및 검색 기능에 참여합니다. 노드는 클러스터처럼 이름으로 식별되는데, 기본이름은 시작 시 노드에 지정되는 임의 UUID입니다. 기본이름 대신 특정 이름으로 정의 가능합니다. 네트워크의 어떤 서버가 Elasticsearch 클러스터의 어떤 노드에 해당하는지 식별해야 하기 때문에 노드의 이름은 관리의 목적에서 중요하다.
  
* AWS의 ElasticSearch Service는 어떤 서비스인가요? ElasticSearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스와 비교하여 어떤 장단점이 있을까요?
* Grafana의 Panel 형식에는 어떤 것이 있을까요? 로그를 보기에 적합한 판넬은 어떤 형태일까요?

## Quest
* 우리의 웹 서버, S3, Cloudfront, VPC, ELB 등이 로그를 남기도록 해 보세요.
* ElasticSearch Service 클러스터를 작은 사양으로 하나 만들고, 이 로그가 ElasticSearch로 들어가도록 해 보세요.
* Grafana를 이용해 ElasticSearch의 로그를 실시간으로 볼 수 있는 페이지를 만들어 보세요.

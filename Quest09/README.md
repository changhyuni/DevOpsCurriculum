# Quest 09. 정적인 컨텐츠 서비스 하기

## Introduction
* 이번 퀘스트를 통해 정적인 컨텐츠의 서비스와 CDN의 개념, 그리고 HTTP 캐싱에 대해 알아보겠습니다.

## Topics
* S3
* Cloudfront
* HTTP Cache
* CORS
* Invalidation(Purging)

## Resources
* https://aws.amazon.com/ko/s3/
* https://aws.amazon.com/ko/cloudfront/
* https://developer.mozilla.org/ko/docs/Web/HTTP/Caching
* https://developer.mozilla.org/ko/docs/Web/HTTP/CORS


## Checklist
* AWS의 S3는 어떤 서비스일까요?
AWS에서 제공하는 무한한 확장성을 가진 서비스입니다. (aws공식문서 피셜) 오브젝트 형식의 스토리지 서비스이며, 버킷, 오브젝트, 키가 중요헌 키워드입니다.
버킷은 s3에서 생성되는 최상위 디렉토리입니다. 버킷 단위로 리전을 지정할 수 있으며, 버킷 이름은 유니크헤야합니다. 오브젝트를 말그대로 s3에 저장되는 파일 객체이고, 파일과 메타데이터로 이루어져 있습니다. 
키는 버킷 내에서 객체를 찾기 위해 사용되는 고유 식별자 입니다. 보통 "디렉토리 + 파일명" 으로 명명 됩니다.  

* AWS의 Cloudfront는 어떤 서비스일까요?
aws에서 제공하는 cdn 서비스입니다. cdn은 말 그대로 컨텐츠 배포를 하기 위한 기술입니다. 컨텐츠를 배포하기 위해서 최적화된 네트워크를 사용하고, 컨텐츠 서버를 중심으로 (orgin) 여러 곳에 분산 배치한 서버를 통해 효과적으로 컨텐츠를 캐싱해 배포하는 구조입니다.  

* HTTP의 캐싱은 어떤 식으로 이루어질까요?
HTTP 캐싱은 보통 선택적으로 이루저 지며, HTTP 캐싱은 일반적으로 GET에 대한 응답만을 캐싱합니다. (정적데이터) 기본 캐시 키는 요청 메시드 그리고 대상 URL로 구성됩니다. 그리고, HTTP는 기본 헤더필드에 있는 
cache-control를 사용합니다. 헤더 내용을보면 Cache-Control: 에 지정된 값에 따라서 캐싱을 하게됩니다. 캐싱을 하게되고 리소스가 저장되고 나면, 이론적으로는 영원히 캐시에 의해 서비스될 수도 있습니다. 하지만, 캐시는 유한한 저장 공간을 가지므로 캐싱된 리소스들은 max-age= 에 따라 스토리지에서 제거됩니다. 반면에 리소스는 서버상에서 변경되어있는데, 캐싱 리소스가 삭제나 갱신이 안되면서 클라이언트는 잘못된 정보를 확인 할 수도 있는데 HTTP에서는 이러한 문제를 유효성검사를 통해 if-none-match 요청을 전달합니다. 

* CORS는 무엇인가요? 어떤 헤더를 통해 구현되나요? EC2 서버나 S3에 구현하려면 어떻게 해야 할까요?

노리에서 제공하는 수학 플랫폼(ai) RESTful API 서버에서 '수학 문제 답' data를 요청하고 받아와 '수학 문제 답' 정보 UI를 보여주는 Web App을 개발한다고 가정하겠습니다.
노리 API의 도메인이 www.knwore.com이라고 가정하고, AWS EC2(Route53)에서 호스팅되고 있는 우리의 Client페이지의 도메인은 answer.math.com 이라고 가정하겠습니다. 이제 노리에 API에 '수학 문제 답' data를 요청해야합니다. 하지만, 배포되고 있는 Client페이지와 노리 API가 다른 도메인을 가지고 있습니다. Client입장에서 도메인이 다른 Web Server에 data, 즉 '수학 문제 답' 이라는 리소스를 요청하는것이 바로 교차 출처 요청인 Cross Origin Request라고 합니다. 

## Quest
* 만들어 둔 서버 API로부터 특정 정보를 받아 웹 서비스로 뿌려주는 클라이언트를 개발해 봅시다.
* 이를 S3에 배포하고, Cloudfront를 통해 서비스하는 인프라를 구성해 봅시다.
* 클라이언트를 수정 배포했을 때, 수정사항이 Cloudfront를 통해 최대한 빨리 반영되게 하려면 어떻게 해야 할까요?

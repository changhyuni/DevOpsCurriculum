# Quest 12. DNS와 HTTPS

## Introduction
* 이번 퀘스트에서는 DNS에 대한 더 깊은 이해와 함께, HTTPS와 TLS에 대해 알아보겠습니다.

## Topics
* DNS
* Route53
* HTTPS
* TLS
* Certificate Manager
* HTTP/3

## Resources
* https://www.redhat.com/sysadmin/dns-domain-name-servers
* https://aws.amazon.com/ko/route53/what-is-dns/
* https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started.html
* https://anushadasari.medium.com/the-https-protocol-explained-under-the-hood-c7bd9f9aaa7b
* https://www.internetsociety.org/deploy360/tls/basics/
* https://docs.aws.amazon.com/ko_kr/acm/latest/userguide/acm-overview.html
* https://http3-explained.haxx.se/ko

## Checklist
* DNS의 레코드에는 어떤 종류들이 있나요? 이 종류들은 어떤 용도로 쓰일까요?  
A(Host) : 주소/호스트 레코드, 정규화된 도메인 이름/호스트명(FQDN)을 IPv4에 연결한다.  
AAAA: : 주소 레코드, IPv6에 연결한다.  
CNAME : 별칭 레코드, 실제 호스트명과 연결되는 별명, 별칭을 정의하고 연결된 레코드로 리다이렉트한다.  
MX : 메일 교환 레코드, 메일서버에 도달할 수 있는 라우팅정보를 제공한다.  
SRV : 서비스 위치 레코드, 비슷한 TCP/IP 서비스를 제공하는 다수의 서버 위치 정보를 제공한다.  
PTR : 포인터 리소스 레코드, 다른 DNS레코드를 가르킨다. 역방향 조회에서 A레코드를 가리킬때 사용한다.  
SOA : DNS영역의 주 DNS 서버를 정의하여 일련번호를 통해 영역의 변경사항을 기록한다. 또한 보조영역의 새로고침 및 다시시도 간격등을 정의하고, 영역의 기본 TTL 값을 정의한다.  
-> SOA추가 설명 : SOA 레코드는 구역에 관한 데이터를 제공하는 서버의 이름, 구역의 관리자, 데이터 파일의 현재 버전, 2차 네임서버의 갱신된 내용을 점검하는 TTL등 DNS의 정보를 저장한 레코드라고 보면된다.

* Route53의 Alias 기능이란 무엇인가요?  
A레코드만 사용할 수 있는 기능입니다. IP주소 대신 AWS 리소스인 S3, Cloudfront, ELB를 설정할 수 있습니다.  
-> 예시  
name.example.com.	CNAME(ALIAS)	d12345xx.cloudfront.net.  
cname.example.com.	CNAME(ALIAS)	dualstack.elb123.us-east 1.elb.amazonaws.com.  
cname.example.com.	CNAME(ALIAS)	s3-website-us-west-2.amazonaws.com.  
cname.example.com.	CNAME(ALIAS)	ebs1234.us-east-1.elasticbeanstalk.com.   

* 대부분의 최신 브라우저에서는 HTTP 대신 HTTPS가 권장됩니다. 이유가 무엇일까요?
* HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?
* HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?
* HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?

## Quest
* `xxx.knowre.com`에 해당하는 커스텀 도메인을 하나 부여해 드리겠습니다. Route53을 활용하여 이 도메인의 자체 네임서버를 구축해 보세요.
* Cloudfront에 연결된 정적인 웹사이트와 ECS에서 서비스 되는 API 서버가 위 도메인으로 서비스 되도록 설정과 연결해 보세요.
* Certificate Manager를 통해 인증서를 만들어 보세요. 그리고 위 두 서비스가 HTTPS로 서비스될 수 있도록 바꿔 보세요.
* HTTP로 접속했을 때 HTTPS로 리다이렉트 되도록 설정해 보세요.

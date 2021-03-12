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
중요한 키워드는 '보안' 입니다. HTTP는 HTML 데이터를 전송하기 위한 통신 규약인데 데이터가 오고가면서 암호화되지 않는 방식을 사용하기 때문에 매우 취약합니다. 예를들어 로그인을 위해서 서버로 비밀번호를 전송하거나, 또는 기밀 문서를 열람하는 과정에서 악의적인 감청이나
변조등이 일어날 수 있습니다. 여기서 SSL(현 TLS)를 HTTP에 접목하여 HTTP의 보안문제를 해결한 것이 HTTPS입니다. 

* HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?  
HTTPS와 SSL가 비슷한 의미로 사용되지만 틀린 방식입니다. HTTPS도 SSL 프로토콜 위에서 동작하는 프로토콜입니다. SSL은 네스케이프에 의해서 발명되였고, 이것이 점차 폭넓게 사용되다가
표준화 기구인 IETF의 관리로 변경되면서 TLS라는 이름으로 바뀌였습니다. TLS 1.0은 SSL 3.0을 계승합니다. 하지만, TLS라는 이름보다 SSL이라는 이름을 훨씬 많이 사용합니다.  
<HTTPS 동작방식 (전자 인증서)>  
웹 브라우저가 서버에 접속 시 서버는 제일먼저 인증서를 제공합니다. 브라우저는 이 인증서를 발급한 CA (인증서기관)가 자신이 내장한 CA의 리스트에 있는지 확인 합니다.
확인 결과를 서버를 통해서 다운받은 인증서가 내장된 CA에 포함되어 있다면, CA의 공개키를 받아 해당 인증서를 복호화 합니다. 해당 CA의 비공개 키를 가지고 있는
CA는 해당 CA밖에는 없기 때문에 서버가 제공한 인증서가 CA에 의해서 발급된 것이라는 것을 의미합니다. CA에 의해서 발급된 인증서라는 것은 접속한 사이트가 결국 CA에 의해서 검토되었다는 것을 의미하고,
해당 서버를 신뢰할 수 있다는 뜻 입니다.  
  
<HTTPS 동작방식 (세부내용)>  
클라이언트가 서버에 접속한다. 이 단계를 Client Hello라고 한다. 이 단계에서 주고 받는 정보는 아래와 같다.  
클라이언트 측에서 생성한 랜덤 데이터 : 아래 3번 과정 참조  
클라이언트가 지원하는 암호화 방식들 : 클라이언트와 서버가 지원하는 암호화 방식이 서로 다를 수 있기 때문에 상호간에 어떤 암호화 방식을 사용할 것인지에 대한 협상을 해야 한다. 이 협상을 위해서 클라이언트 측에서는 자신이 사용할 수 있는 암호화 방식을 전송한다.  
세션 아이디 : 이미 SSL 핸드쉐이킹을 했다면 비용과 시간을 절약하기 위해서 기존의 세션을 재활용하게 되는데 이 때 사용할 연결에 대한 식별자를 서버 측으로 전송한다.  
   
서버는 Client Hello에 대한 응답으로 Server Hello를 하게 된다. 이 단계에서 주고 받는 정보는 아래와 같다.  
서버 측에서 생성한 랜덤 데이터 : 아래 3번 과정 참조  
서버가 선택한 클라이언트의 암호화 방식 : 클라이언트가 전달한 암호화 방식 중에서 서버 쪽에서도 사용할 수 있는 암호화 방식을 선택해서 클라이언트로 전달한다. 이로써 암호화 방식에 대한 협상이 종료되고 서버와 클라이언트는 이 암호화 방식을 이용해서 정보를 교환하게 된다.
인증서  
 
클라이언트는 서버의 인증서가 CA에 의해서 발급된 것인지를 확인하기 위해서 클라이언트에 내장된 CA 리스트를 확인한다. CA 리스트에 인증서가 없다면 사용자에게 경고 메시지를 출력한다. 인증서가 CA에 의해서 발급된 것인지를 확인하기 위해서 클라이언트에 내장된 CA의 공개키를 이용해서 인증서를 복호화한다. 복호화에 성공했다면 인증서는 CA의 개인키로 암호화된 문서임이 암시적으로 보증된 것이다. 인증서를 전송한 서버를 믿을 수 있게 된 것이다.  

클라이언트는 상기 2번을 통해서 받은 서버의 랜덤 데이터와 클라이언트가 생성한 랜덤 데이터를 조합해서 pre master secret라는 키를 생성한다. 이 키는 뒤에서 살펴볼 세션 단계에서 데이터를 주고 받을 때 암호화하기 위해서 사용될 것이다. 이 때 사용할 암호화 기법은 대칭키이기 때문에 pre master secret 값은 제 3자에게 절대로 노출되어서는 안된다.  

그럼 문제는 이 pre master secret 값을 어떻게 서버에게 전달할 것인가이다. 이 때 사용하는 방법이 바로 공개키 방식이다. 서버의 공개키로 pre master secret 값을 암호화해서 서버로 전송하면 서버는 자신의 비공개키로 안전하게 복호화 할 수 있다. 그럼 서버의 공개키는 어떻게 구할 수 있을까? 서버로부터 받은 인증서 안에 들어있다. 이 서버의 공개키를 이용해서 pre master secret 값을 암호화한 후에 서버로 전송하면 안전하게 전송할 수 있다.  
 
서버는 클라이언트가 전송한 pre master secret 값을 자신의 비공개키로 복호화한다. 이로서 서버와 클라이언트가 모두 pre master secret 값을 공유하게 되었다. 그리고 서버와 클라이언트는 모두 일련의 과정을 거쳐서 pre master secret 값을 master secret 값으로 만든다. master secret는 session key를 생성하는데 이 session key 값을 이용해서 서버와 클라이언트는 데이터를 대칭키 방식으로 암호화 한 후에 주고 받는다. 이렇게해서 세션키를 클라이언트와 서버가 모두 공유하게 되었다는 점을 기억하자.  
 
클라이언트와 서버는 핸드쉐이크 단계의 종료를 서로에게 알린다.  
  
3. 클라이언트는 서버의 인증서가 CA에 의해서 발급된 것인지를 확인하기 위해서 클라이언트에 내장된 CA 리스트를 확인함
* HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?
* HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?

## Quest
* `xxx.knowre.com`에 해당하는 커스텀 도메인을 하나 부여해 드리겠습니다. Route53을 활용하여 이 도메인의 자체 네임서버를 구축해 보세요.
* Cloudfront에 연결된 정적인 웹사이트와 ECS에서 서비스 되는 API 서버가 위 도메인으로 서비스 되도록 설정과 연결해 보세요.
* Certificate Manager를 통해 인증서를 만들어 보세요. 그리고 위 두 서비스가 HTTPS로 서비스될 수 있도록 바꿔 보세요.
* HTTP로 접속했을 때 HTTPS로 리다이렉트 되도록 설정해 보세요.

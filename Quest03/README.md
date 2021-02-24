# Quest 03. 네트워크의 기초

## Introduction
* 이번 퀘스트에서는 인터넷이 어떻게 동작하며, 서버와 클라이언트, 웹 브라우저 등의 역할은 무엇인지 알아보겠습니다.

## Topics
* 서버와 클라이언트, 그리고 웹 브라우저
* 인터넷을 구성하는 여러 가지 프로토콜
  * IP
  * TCP
  * HTTP
* DNS

## Resources
* https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95
* https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C
* https://ping.eu/traceroute/
* https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C
* https://www.wireshark.org/download.html
* https://ko.wikipedia.org/wiki/HTTP
* https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C
* https://networking.ringofsaturn.com/Tools/dig.php

## Checklist
* 인터넷은 어떻게 동작하나요? OSI 7 Layer에 입각하여 설명해 보세요.

인터넷 통신은 통신 방법을 `OSI 7 Layer`라는 7개의 레이어로 나누어서 통신합니다. 이렇게 레이어를 나눈것은 각 통신자끼리 약속이고 표준화와 절차를 따르기 위해 `프로토콜(Protocol)`를 사용합니다. 시작은 1계층 `물리계층`에서 시작합니다. 최하위 모델 계층에 속하며, 상위 계층에서 전송된 데이터를 물리매체를 통해 다른 시스템에 전기적 신호를 전송합니다. 2계층 `링크계층`은 네트워크 기기들 사이에 데이터를 전송하는 역할을 합니다. 상위 계층에서 정보를 받아 주소와 제어정보를 헤더에 추가시킨다. 3계층 `네트워크계층`은 라우팅 알고리즘을 사용하여 최적의 경로를 선택하고 송신측으로부터 수신측으로 전송합니다. 4계층 `전송계층`은 발신지에서 에러 관리 및 통신에 대한것을 보장하는 프로토콜을 사용합니다. 5계층 `세선계층`은 통신이 연결되는 계층으로 `Port`를 기반으로 연결합니다. 6계층 `표현계층`은 송신측과 수신측 사이에서 데이터형식을 정해주고, 코드변환 구문검색 암호화 등을 변환해줍니다. 7계층 `응용계층`은 사용자와 바로 연결되어 있고, 사용자로부터 정보를 입력받아 하위 계층으로 전달하고 하위 계층에서 전송한 데이터를 사용자에게 전달한다. 이 계층구조에서 각 계층마다 자신의 정보들을 `인캡슐레이션`을 하고 상위 계층으로 보내고 상위계층에서 받은 패킷들을 `디캡슐레이션`을 통헤 내용을 각 계층에서 내용을 확인할 수 있습니다.  

* 우리가 브라우저의 주소 창에 `www.knowre.com` 을 쳤을 때, 어떤 과정을 통해 노리의 서버 주소를 알게 되나요?

먼저, `www.knowre.com`을 맵핑하고 있는 IP주소로 변환하는 작업을 해야합니다. 가장먼저, 브루아저는 해당 도메인이 브라우저 캐시에 들어있는지 확인합니다. `(chrome://net-internals/#dns)` 만약 브라우저 캐시에서 찾지 못하면, OS에 저장된 DNS Cache를 확인합니다. `(linux : /etc/hosts)` 여기에도 해당주소가 없다면 Router DNS Server에서 직접 조회합니다. `(linux : /etc/resolv.conf)`에도 없다면, DNS Query를 시작하게 됩니다. 먼저, root domain서버 com서버, 그리고 해당 아이피가 있는 네임서버에서 IP를 가져오게 됩니다. 이제, Server의 IP주소로 TCP Socket을 열어 Server와 통신 준비를 진행합니다. 여기서 `3-way-handshark`를 통해 서버와 클라이언트와 `ESTABLISHED(성립)`가 되고 해당 `TCP Socket`을 통해서 HTTP요청을 보내고 요청을 받은 서버는 요청에 맞게 해당 페이지를 보여줍니다. 

## Quest
* tracert(Windows가 아닌 경우 traceroute) 명령을 통해 `www.google.com` 까지 가는 경로를 찾아 보세요.
  * 어떤 IP주소들이 있나요?
  * 그 IP주소들은 어디에 위치해 있나요?
* Wireshark를 통해 `www.google.com` 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  * TCP 패킷을 주고받는 과정은 어떻게 되나요?
  * 각각의 패킷의 헤더에 어떤 정보들이 담겨 있나요?
* telnet 명령을 통해 `http://www.google.com/` URL에 HTTP 요청을 날려 보세요.
  * 어떤 헤더들이 있나요?
  * 그 헤더들은 어떤 역할을 하나요?

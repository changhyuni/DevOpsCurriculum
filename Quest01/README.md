# Quest 01. 리눅스와 친해지기

## Introduction
* 이번 퀘스트를 통해 리눅스의 기본적인 구조와 기능에 대해 공부할 수 있습니다.

## Topics
* 리눅스의 기본 커맨드
  * `cd`, `pwd`, `ls`, `cp`, `mv`, `mkdir`, `rm`, `touch`, `ln`, `echo`, `cat`, `tail`, `find`, `ps`, `kill`, `grep`, `wc`, `df`, `du`
  * 파이프(`|`) 문자
* 리눅스의 기본적인 디렉토리 구성
  * `/bin`, `/usr/bin`, `/boot`, `/dev`, `/etc`, `/home`, `/lib`, `/mnt`, `/proc`, `/root`, `/sbin`, `/usr/sbin`, `/tmp`, `/usr`, `/var`
* 쉘과 환경변수와 퍼미션
  * sh, bash, zsh
  * `.bash_profile`, `.bashrc`, `.zshrc`
  * `env`, `set`, `unset`, `export`
  * `chmod`, `chown`, `chgrp`
  * setuid, Sticky bit
* 운영체제의 기초
  * 프로세스와 쓰레드
  * 파일 시스템
* 리눅스의 배포판
  * Ubuntu, Debian, Redhat Enterprise, CentOS, Gentoo, Amazon Linux
  * 패키지 시스템: `apt`(.deb), `yum`(.rpm)
* vi
  * `i`, `w`, `q`, `u`, `d`, `p` 명령

## Resources
* https://ubuntu.com/tutorials/command-line-for-beginners#1-overview
* https://www.howtogeek.com/117435/htg-explains-the-linux-directory-structure-explained/
* https://www.tutorialspoint.com/unix/unix-what-is-shell.htm
* https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH
* https://www.infoworld.com/article/2832405/what-is-systemd-and-why-does-it-matter-to-linux-users.html
* https://thebloggingpot.com/2018/05/23/different-linux-distributions-explained/
* https://developer.ibm.com/technologies/linux/tutorials/l-lpic1-102-5/
* https://developer.ibm.com/technologies/linux/tutorials/l-lpic1-103-8/

## Checklist
* 리눅스의 파이프 문자는 어떤 역할을 하나요?

`cat inventory.txt | cut -d ',' -f 3 | grep '^c' | sort`
파이프(ㅣ,pipe())를 사용하면 파이프앞에서 실행한 명령과 파이프 뒤에서 실해되는 명령은 파이프에 의해서 연결되고, 파이프에 의해서 두 프로세스 사이에 데이터가 공유됩니다. 명령을 실행하면 프로세스가 실행되면서 각자 독립적인 메모리 공간에서 실행하게 되는데 이때, 예제를 보면 cat 명령의 프로세스 간 정보를 전달하기 위해 IPC방법인 파이프를 사용할수 있습니다. 

* 리눅스의 셸은 어떤 역할을 하나요? bash와 zsh는 어떻게 다른가요?

쉘의 가장 중요한 키워드는 `인터페이스` 입니다. 일반적으로 프로그램은 바이너리 형태의 명령어 집합체이고, 컴퓨터는 바이너리 형태의 정보들을 읽어 들입니다. 쉘은 리눅스 링 구조에서 사용자와 커널 사이에 존재하며, 사용자의 명령을 커널에 내리기 위한 매게체 역할을 하고 있습니다. 기본 적으로 만들어진 `bash`는 강력하면서 간단한 쉘이지만, 좀 더 간단하고 플러그인 기능으로 여러 기능을 가지고 있는것이 바로 `zsh`입니다. 경로 자동완성이나 스펠링 검사 tab 키를 이용한 경로 선택 등 기존 bash보다 기능적으로 우수합니다.

* 리눅스의 권한 체계는 어떻게 이루어져 있나요?
`-rwxrw-r-- 1 user1 user2   76141 Jul 13 15:56 file2.txt`
리눅스 권한 체계는 세 가지 종류가 있습니다. 읽기(Read), 쓰기(Write), 실행하기(Execute) 예제를 보게되면, 권한은 총 10개의 문자로 구성되어 있고 네 개의 그룹으로 나누게 됩니다. 1번째 문자는 (- : 파일 / d : 폴더/디렉토리 / l : 링크) 의미를 담고 있고, 2~4번째 문자는 파일의 주인의 읽기,쓰기,실행 권한을 말하며, 5~7번째 문자는 파일 주인이 속한 그룹의 읽기,쓰기, 실행하기 권한을 설명합니다. 8~10번째 문자는 그 외 유저들의 읽기,쓰기, 실행하기 권한을 설명합니다. 1번째 문자가 `-`로 파일이란 것을 알수 있고, 2~4번째 문자 `rwx`로 파일 주인이 읽기,쓰기, 실행하기가 전부 가능한 것을 알수 있고, 5~7번째 문자`rw-`로 파일 주인이 속한 그룹이 읽기와 쓰기가 가능한 것을 알수 있고, 8~10번째 문자 `r--`로 파일 주인과 그룹외에 사용자는 읽기만 가능한 것을 알수 있습니다. 권한 변경은 chmod로 가능하며, 권한마다 부여된 고유 숫자(r=4, w=2, x=1)가 있습니다.

* 프로세스와 쓰레드는 무엇인가요?
* 현재 실행되고 있는 프로세스들 중 PID가 1인 프로세스는 어떤 역할을 할까요? init과 systemd는 무엇이고 어떻게 다른가요?
* 파일시스템이란 무엇일까요? 어떤 것이 있을까요? 지금 다루는 운영체제는 어떤 파일시스템을 쓰고 있나요?
* 리눅스의 배포판이란 무엇일까요? 여러 가지 배포판들은 어떻게 생겨났을까요?
* 리눅스의 패키지 시스템이란 무엇일까요? 이러한 시스템이 생긴 이유는 무엇일까요? deb과 rpm은 어떤 차이가 있을까요? RPM이 있는데 yum과 같은 시스템이 나온 이유는 무엇일까요?
* vi는 어떤 에디터인가요? vi와 vim은 어떻게 다를까요? vi는 왜 모든 리눅스의 기본 에디터가 되었을까요?

## Quest
* 인스턴스 생성
  * t3.nano 등급으로 EC2 인스턴스를 생성해 봅시다! Amazon Linux 2, Ubuntu 두 가지를 각각 생성해 봅니다.
  * EC2 생성 과정에서 .pem 파일이 하나 생기는데, 이는 저에게 슬랙을 통해 공유해 주시면 됩니다.
  * 세 배포판은 어떻게 다른가요?
* 리눅스 연습
  * Amazon Linux 2 인스턴스에서 위의 Topics의 기본 커맨드를 연습해 봅니다.
  * 리눅스의 기본 디렉토리들에 어떤 정보들이 있는지 둘러 봅니다.
  * zsh를 설치하고 `.zshrc` 파일을 포함해 여러 가지 설정을 해 봅니다.
  * Topics의 환경변수나 퍼미션 관련 커맨드를 연습해 봅니다.
  * 현재 실행되고 있는 프로세스들과 마운트 된 파일시스템들을 확인해 봅니다.
  * vi를 열어 여러 가지 기본 명령과 간단한 편집 방법을 연습해 봅니다.
* 생성한 인스턴스 중 Ubuntu는 완전히 종료(Terminate)하고, Amazon Linux 2는 일단 꺼둡니다.

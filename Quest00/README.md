# Quest 00. 데브옵스란 무엇인가

## Introduction
* 이번 퀘스트에서는 데브옵스가 무엇인지, 이러한 개념이 왜 나오게 되었는지 등에 대해 다룰 예정입니다.

## Resources
* https://aws.amazon.com/ko/devops/what-is-devops/
* https://azure.microsoft.com/ko-kr/overview/what-is-devops/
* https://cloud.google.com/devops/?hl=ko
* https://en.wikipedia.org/wiki/DevOps

## Checklist
* 만약 비개발자에게 데브옵스가 무엇인지 설명하게 된다면 어떻게 설명할 수 있을까요?

우리가 쇼핑몰 같은 홈페이지를 처음부터 만든다고 생각해봅시다. 화면에 보여지는 모든것들은 예를들면, 로그인창, 사진, 글자, 검색기능 등등 이것들은 '코드' 라는 것들로 이루어져 있습니다. 이러한 코드를 작성하기면 하면 만들어지는게 아니라 코드들을 잘 모아서 실행파일로 만들어야 하고, 이 실행파일을 실행시킬 컴퓨터가 있어야됩니다. 여기서, 개발자는 코드를 만들고 실행파일을 만들어 운영자에게 전달합니다. 전달받은 운영자는 컴퓨터에 이 실행파일을 올려 실행시키게 되고, 이제서야 우리는 우리가 만든 쇼핑몰 웹 페이지를 볼수 있습니다. 하지만, 이렇게 역할을 나누다 보니 문제점이 생기게 됩니다. 개발자는 새로운 코드를 개발하고 계속 도입하고싶어 합니다. 반대로 운영자는 실행파일이 올라간 컴퓨터가 꺼져버리면 사용자들이 홈페이지에 접속하지못해 안정성을 최우선으로 여깁니다. 이렇게, 각자의 영역에서만 관심있으니 개발자와 운영자간에는 점점
의사소통 할일이 줄어들게 되고, 결국 `소통단절` 현상으로 인해 비즈니스에 비효율적입니다. 이제 여기서 등장한것이 `DevOps` 라는 방법론입니다.
개발자들과 운영자들을 서로 잘 융합시키고, 반복적인 일들을 자동화 하면서 비즈니스에 집중할 수 있는 환경을 만들고 무엇보다 소통을 원할이 할수있는 문화를 만들어나가면서 사일로 현상을 없애는것이 `DevOps` 방법론입니다.


* 데브옵스라는 개념 이전의 소프트웨어 개발은 어땠을까요? 어떤 요구사항을 충족하기 위해 데브옵스라는 개념이 생겼을까요?

가장 중요한 키워드는 `신속함` 이라고 생각합니다. 이전에 개발 배포 방식은 개발된 코드를 빌드하고 빌드한 패키지를 배포 수동으로 하는 방식이였는데, `DevOps`가 도입되면서 이러한 방식들을 자동화툴을 사용하여 CI/CD를 구축하고 릴리즈 속도를 빠르게 가져가게되면서, 고객요구를 빠르게 수용할 수 있고, 개발자는 빌드,배포를 같은 일련의 반복적인 작업에 리소스를 줄이고 비즈니스와 관련된 메인코드에 집중할 수 있습니다. 

* 데브옵스 엔지니어가 따로 존재하는 조직과 따로 존재하지 않는 조직은 각각 어떤 장단점을 가지고 있을까요?

`DevOps Engineer`가 도입된 조직은 협엽이나 프로젝트를 진행함에 있어, 사일로 현상을 벗어나게됩니다. 그리고, 시스템들을 자동화하고 CI/CD를
도입하여 릴리즈 속도에 대한 이점을 가지게 됩니다. 하지만, `DevOps`를 도입함에 있어서 가장큰 문제점은 '개발자가 운영까지' 하는것인지 '운영자가 개발까지' 하는것인지 업무분담에 가중치가 제일 중요합니다. 확실하게 업무 분담을 정해야되지 않는다면 그런 '애매모호함'이 `DevOps` 도입한 조직에서 큰 단점이라고 생각합니다.` 

`DevOps Engineer`가 도입되지 않는조직은 개발자와 운영자가 완벽히 분리되어 있는 환경입니다. 분리되어있고 조직간의 교류가 어려워 프로젝트나 협업간에 효율적인 소통이 어렵게되고 의사소통하는데 리소스를 소모하게되며 의견이 많으면 많을수록 점점 프로젝트에 목적과 방향성이 달라질수 있습니다. 하지만, 분리되어 있는 조직인 만큼 일처리에 있어서 주어진일에대한 집중도가 높아지고, 장애처리를에도 효과적이라 생각합니다.`


## Quest
* 발급받은 AWS 계정에 접속해 봅니다.
* 본인의 루트 AWS 엑세스 키 ID와 비밀 엑세스 키를 생성하고, 본인의 로컬 머신에 저장해 놓습니다.
* 새로운 무언가를 생성하지는 않은 상태에서, 어떤 것들이 있는지 둘러봅니다!
* 과제 리뷰용 IAM 계정을 하나 만들어서 저에게 알려 주세요.
  * 콘솔의 IAM 메뉴에 들어가서, 왼쪽의 `엑세스 관리` -> `사용자`에 들어가서 `사용자 추가`를 클릭합니다.
  * 사용자 이름에 `kcho@knowre.com`을 입력하고, 엑세스 유형에 `프로그래밍 방식 엑세스`와 `AWS Management Console 액세스`를 모두 클릭합니다.
  * `자동 생성된 비밀번호`와 `비밀번호 재설정 필요`를 체크합니다.
  * `권한 설정`에서 `기존 정책 직접 연결`을 선택한 뒤, `AdministratorAccess`를 체크하고, 하단의 `다음:태그`와 `다음:검토`를 계속해서 누른 뒤, 사용자를 만듭니다.
  * `액세스 키 ID`와 `비밀 액세스 키`, `비밀번호`, 그리고 위의 안내에 써 있는 접속을 위한 `https://[12자리숫자].signin.aws.amazon.com/console` URL을 저에게 보내 주시면 됩니다!

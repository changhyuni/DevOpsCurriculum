# Quest 05. 형상관리툴

## Introduction
* git은 2021년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash`
* GitHub

## Resources
* https://try.github.io
* http://pcottle.github.io/learnGitBranching

## Checklist
* 형상 관리 시스템은 왜 필요한가요?

문서나 파일의 변경사항을 쳬계적,지속적으로 추적하고 변경되었을때 내역을 기록해두었다가 나중에 찾아보거나 수정이 필요 할때 그 상태로 돌아갈수 있어 관리에 매우 효율적입니다. 

* 분산형 형상관리 시스템이란 무엇일까요? git과 같은 분산형 시스템의 장점은 무엇일까요?

CVCS(중앙집중형 방식)으로 하면 매우 간편하지만, 먼저 중앙서버가 다운되게 되면 update나 commit과정에서 문제가 발생합니다. 또한 commit한 내용이 바로 중앙서버에 업로드되에서 해당 소스를 공유하는 모든 개발자에게 영향이 가게 됩니다. 반면에, DVCS(분산관리 방식)은 업로드하기 전에 일련의 과정을 거치게 되는데 로컬 작업공간이 생겨 중간중간 올리고자 하는 내용을 로컬저장소로 올려서 작접한 내용에 대한 이력을 관리할 수있고, 최종적으로 반영하고자 할때 중앙서버에 업로드되는 방식입니다. 마지막으로 branch를 통해서 개발자들이 동시다발적으로 다양한 작업을 진행할 수 있습니다. 

* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?

git clone : 서버 저장소를 내려받을 수 있는 명령어 입니다. 저장소의 내용을 다운로드받고 자동으로 init됩니다 local에 아무것도 없는 상태에서 데이터를 가져옵니다.  
git pull : 이미 로컬 저장소에 존재하고, 원격 저장소의 수정상태를 반영하기 위해 저장소의 내용을 다운로드 합니다.  
git add : 로컬 작업 디렉토리에서 변경 내용을 스테이징 영역에 추가하기 위해 사용되는 Git명령어 입니다. git commit 기록전에 변경분을 모아놓기 위해서 사용합니다.  
git commit : git은 버전들을 관리할 때 각 버전을 저장하는 시점 (인덱스 공간에 있는 파일)을 하나의 "스냅샷"으로 저장합니다. 커밋은 수정할 수 없으며 영구적으로 저장됩니다.  
git branch : 다양한 작업을 동시에 진행할 수 있는 git의 기능으로 각자 독립적인 작업 영역안에서 사용되기 때문에 다른 브렌치의 영향을 받지 않습니다.  
git push : 원격 저장소에 commit된 코드를 올리는 기능입니다.  
git stash : 다른 브렌치로 변경해야 될때 commit으로 해당 내용을 저장하는 것이 아닌 잠시 저장할 수 있도록 하는 기능입니다. 나중에 다시 꺼내서 사용할 수 있습니다. 

## Quest
* github의 개인 계정에 이번 퀘스트를 위한 리포를 만들어 보세요.
* Quest 04에서 vi로 입력한 웹 서비스 대신 github의 저장소를 clone하여 같은 일을 하는 서버를 띄워 보세요.
* 리포지토리에 민감한 정보(개인정보, 패스워드 등)가 들어가지 않도록 주의합니다.

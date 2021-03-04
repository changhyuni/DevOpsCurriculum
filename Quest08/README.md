# Quest 08. 배포 자동화 하기

## Introduction
* 이번 퀘스트에서는 여러 대의 서버에 자동 배포를 구현하는 방법에 대해 알아보겠습니다.

## Topics
* Systems Manager
* Fargate
* Blue/Green Deployment

## Resources
* https://aws.amazon.com/ko/systems-manager/
* https://aws.amazon.com/ko/fargate/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&fargate-blogs.sort-by=item.additionalFields.createdDate&fargate-blogs.sort-order=desc
* https://www.redhat.com/ko/topics/devops/what-is-blue-green-deployment

## Checklist
* AWS의 Systems Manager는 어떤 서비스인가요?

AWS에서 제공하는 사용자 인터페이스 웹 콘솔로도 사용하게 해주는 서비스를 제공하여 리소스 관리 및 자동화를 할 수 있는 서비스입니다 .  세션매니저라는 기능으로 `IAM`기반으로 EC2에 엑세스할 수 있는 기능도 제공합니다.  '런북' 이라는 개념을 사용하며 미리 정의된 자동화 런북을 사용하여 운영작업에 효율적으로 사용할 수 있습니다. 개인적으로 `ansible`과 비슷한 기능을 가진 서비스라고 생각합니다. 

* AWS의 Fargate는 어떤 서비스인가요? 어떤 장점을 가지고 있나요?
컨테이너를 서버리스 형태로 제공하는 AWS 서비스 입니다. 즉, 이말은 네트워킹이나, 보안 및 확장기능 등이 이미 설정되어 있습니다. 사용자는 각 컨테이너에 할당된 리소스를 정하기만 하면 됩니다. EC2를 올리면 인스턴스를 소유하고 관리해야 할 필요성이 있지만, Fargate의 경우 실행만 하면되서, EC2 인스턴스에 대한 운영 고민을 좀 더 줄일 수 있습니다.

* Blue/Green Deployment라는 것은 어떤 개념일까요?

blue/green 배포는 배포전략 기법중 하나입니다.  blue/gree 배포는 구 버전에서 새 버전으로 일제히 전환하는 전략입니다. 구 버전의 서버와 새 버전의 서버들을 동시에 구성하고 배포 시점이 되면 라우팅되고 있는 로드벨런서나 트래픽을 일제히 새로운 서버로 변경시키는 것 입니다. 하나의 버점난 프로덕션 되므로 버전 관리 문제를 방지할 수 있고, 또한 빠른 롤백이 가능합니다. 또 다른 장점으로 운영 환경에 영향을 주지 않고 실제 서비스 환경으로 새 버전 테스트가 가능합니다. 구 버전과 새버전을 모두 구성한 뒤 포트를 다르게 주거나 내부 트래픽일 경우 새 버전으로 접근하도록 설정하여 테스트를 진행해 볼 수 있습니다. 하지만, 새로운 시스템을 구축하고 라우팅만 변경하는 것으로 시스템 자원이 두 배가 필요하고 전체 플랫폼에 대한 확실한 테스트가 진행 되어야 합니다. 

## Quest
* AWS의 Systems Manager를 이용하여, 로컬 CLI 컨테이너 이미지를 배포하고 리모트 서버에서 그 이미지를 교체하여 띄울 수 있게 해 보세요. 한 개의 명령으로 이 모든 것이 이루어질 수 있게 하면 가장 좋습니다!
* 이번에는 EC2 대신 Fargate를 이용하여 같은 서비스를 구현해 보세요. 수동으로 배포하려면 어떻게 해야 할까요?
* Fargate에도 처음에 EC2에 한 배포 자동화를 구현해 보세요.



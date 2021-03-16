# Quest 14. 코드로 인프라 관리하기

## Introduction
* 이번 퀘스트에서는 인프라를 코드로 관리하는 법에 대해 알아보겠습니다.

## Topics
* IaC
* Terraform
  * State
  * Import
  * AWS Provider

## Resources
* https://en.wikipedia.org/wiki/Infrastructure_as_code
* https://www.terraform.io/intro/index.html
* https://www.44bits.io/ko/post/terraform_introduction_infrastrucute_as_code
* https://www.terraform.io/docs/state/index.html
* https://registry.terraform.io/providers/hashicorp/aws/latest/docs

## Checklist
* IaC(Infra as Code)는 어떤 개념인가요? 이러한 개념이 왜 생기게 되었을까요?  
  
인프라 리소스를 코드화 시켜 코드를 작성하고 배포하면 그에 맞는 인프라가 만들어지는 개념입니다. IaC가 생기기전에는 모든작업을 콘솔이나 웹 대쉬보드 형태로 했습니다. 
이러한 어떻게 보면 편할 수 있지만 인프라가 복잡해지고 설정 값들이 많아지기 시작하면서 휴먼에러도 생기기 시작하고 관리의 대한 고민이 생기게 되었습니다. IaC는 이러한 고민들을 해결하기 위해 만들어진 개념으로
인프라 리소스 정의나 웹 애플리케이션을 프로그래밍 코드로 코드화 시키고 배포하여 git의 기능을 사용할 수도 있고, 해당 코드를 코드리뷰하여 휴먼에러를 줄일 수 있습니다. 그리고, 각 각의 설정값들을 직관적(코드)로 확인할 수 있습니다.   

* 테라폼은 어떤 소프트웨어인가요? 다른 IaC와 비교하여 어떤 장점을 가지고 있을까요?  
  
테라폼은 불변 인프라를 지양하는 소프트웨어로 기존 IaC보다 정적 인프라의 특화되어 있습니다. 가장 많이 거론되는게 Ansible vs Terraform 입니다. Ansible은 Configuration에 특화된 소프트웨어이고 Terraform은 Provioning에 특화된 소프트웨어 입니다.
두개의 소프트웨어 모두 멱등성을 보장하지만, Ansible에 비해 Terraform은 거의 완벽한 멱등성을 보장하는 소프트웨어입니다.  

* 테라폼의 State는 무엇일까요? 기존에 AWS 콘솔을 통해 정의된 리소스를 테라폼의 State에 가져오려면 어떻게 해야 할까요?  
  
Terraform이 AWS 등의 자원을 관리 할 때 크게 .tf(Configuration)과 .tfstate(State) 가 있습니다. 예를 들어, VPC 리소스를 .tf로 정의하고 배포(terraform apply)하면 VPC가 만들어지고 만들어진 내용을 terraform.state에 기록합니다. 이렇게 되면 AWS의 자원을 
Terraform으로 관리 할 수 있게 됩니다. 이후부터는 이 설정 파일과 상태 파일을 비교하고 실제 AWS에 적용된 내용을 비교해서 어떤 부분을 추가하고 삭제할지를 결정하게 됩니다. 배포 시 해당 파일을 비교해가며 멱등성을 확인하게 됩니다.  
terraform import를 통해서 기존의 있는 리소스를 state에 지정할 수 있고, 오픈소스인 terraforming을 사용하여 해당 소프트웨어가 지원하는 리소스의 state를 저장할 수 있습니다.



## Quest
* 지금까지 구축했던 다음의 인프라를 모두 삭제하고 테라폼 코드로 재구축해 보세요.
  * VPC
  * Fargate 기반의 API 서비스
  * 람다 기반의 서비스
  * S3와 Cloudfront 기반의 정적 웹사이트

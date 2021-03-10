# Quest 11. 보안의 기초

## Introduction
* 이번 퀘스트에서는 네트워크와 보안에 관한 아주 기초적인 것을 다룹니다.

## Topics
* VPC, 서브넷, 방화벽
* IAM
* Secrets Manager

## Resources
* https://www.44bits.io/ko/post/understanding_aws_vpc
* https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html
* https://aws.amazon.com/ko/secrets-manager/
* https://blog.logrocket.com/web-security-101/

## Checklist
* AWS의 VPC는 어떤 서비스일까요?
AWS에서 제공하는 네트워크 서비스입니다. VPC는 논리적으로 격리되어 있으며, 하나의 IDC라고 생각하면 쉽게 이해할 수 있습니다. 서브넷, 라우팅 테이블 및 네트워크 게이트웨이 구성등 가상 네트워킹 환경을 완벽하게 제어할 수 있습니다.  

* 인프라의 네트워크를 가상으로 구축하는 것은 어떤 장점이 있을까요?
가장 중요한 키워드는 생산성입니다. 네트워크 가상화를 통해서 하드웨어 구매 및 유지관리 비용을 줄이고 인프라 수요를 따라잡기 위해 과도하게 프로비저닝된 리소스를 효율적으로 사용할 수있습니다. 또한, 네트워크를 프로비저닝함에 있어 기존 하드웨어 방식보다 빠르게 구축할 수 있고, 가시성 또한 좋습니다.  

* IAM은 어떤 서비스일까요? 어떤 식으로 계정에 권한을 부여할까요?
AWS에서 제공하는 권한관리의 개념인 RBAC+ABAC를 융합한 권한관리 서비스입니다. 서비스를 이용하는 사용자들에게 권한을 직접적으로 주거나 사용자들을 그룹으로 묶어 권한을 부여하는 형식이 아닌, 권한의 논리적 집합으로 '역할' 이라는 것을 만들고 역할을 사용자 그룹이나 사용자 에게 연결합니다. 즉 Group (사용자그룹)으로 주로 사용하면서, Role(역할)은 권한의 Group으로 사용하는 것입니다.  
<IAM 개념파악>  
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::knowre/*"
    }
  ]
}


* DB 패스워드와 같이 민감한 정보를 어떤 식으로 관리하는 것이 좋을까요?
* Secrets Manager는 어떤 서비스일까요? AWS 외에 비슷한 역할을 하는 서비스로는 어떤 것이 있을까요?
* 어플리케이션 레벨에서의 보안 전략에는 어떤 것들이 있을까요?

## Quest
* VPC를 구축하고, 적절한 서브넷 설정, 보안 그룹과 방화벽을 설정해 보세요. 각각의 단계와 구성요소들이 어떤 의미인지 이해해야 합니다.
* 지금까지 구현한 웹 어플리케이션을 VPC 안에서 서비스 해 보세요.

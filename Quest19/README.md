# Quest 19. 스트레스 테스트

## Introduction
* 이번 퀘스트에서는 스트레스 테스트와 오토 스케일링에 대해 알아보겠습니다.

## Topics
* Stress Test
* Artillery
* AWS Auto Scaling
* Fargate Auto Scaling
* Lambda Concurrency

## Resources
* https://www.guru99.com/stress-testing-tutorial.html
* https://artillery.io/
* https://aws.amazon.com/ko/about-aws/whats-new/2018/01/introducing-aws-auto-scaling/
* https://aws.amazon.com/ko/blogs/korea/category/compute/auto-scaling/
* https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/service-auto-scaling.html
* https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html

## Checklist
* 스트레스 테스트는 왜 하는 것일까요?  
  
  서버가 장애가 나기전에 얼마나 많은 사용자들을 버틸 수 있는지 확인하기 위해서 진행하게 됩니다.  
  민감한 정보나 보안상의 문제가 노출되지 않은지 확인할 수 있습니다.  
  장애 조치와 복구 절차가 효과적이고 효율적인지 확인할 수 있습니다.  

 ## 용어정리
    
 ### **Workload**

- 주어진 시간 동안 컴퓨터가 처리한 일의 양. 혹은 그러기 위해 부과된 연속된 일.
- Web 기반 시스템에서는 주로 HTTP 요청이 Workload 역할을 하게 됩니다.

### **Metric**

- 응답 시간(Response Time)
- 출력량(Throughput)
- TPS(Transaction Per Second)
- CPU의 연산 속도인 MFLOPS(Millions of Floating-point Operations Per Second)

### **응답 시간(Response Time)**

- 인터넷에서 패킷이 라우팅되는 시간도 포함된다.
- 평균 응답 시간(Mean Time)이 Web Server형 시스템의 성능 분석에서 중요합니다.

### **처리량(Throughput)**

- PPS(Page Per Second) : 웹 시스템에서 특정 페이지에 대한 요청.
- RPS(Request Per Second)
- TPS(Transaction Per Second) : 데이터베이스의 트랜잭션 기반 시스템에서 사용.
- BPS(Bits Per Second) : 네트워크의 경우는 초당 비트 수

### **Reliability**

- 에러의 확률 혹은 에러 간의 평균 시간으로 측정됩니다.
- Error-Free Seconds

### **Bottleneck**

- 구성 컴포넌트 중 활용도가 가장 높은 컴포넌트를 일컫는 말입니다.
- 튜닝(tuning)이란, 활용도가 100%인 컴퓨넌트가 정말 100%로 사용되어야 하는가를 살피고, 각 컴포넌트 간 활용도의 밸런스를 맞추어서 전체 시스템이 가장 좋은 성능을 발휘하도록 개선하는 작업입니다.
  
* 스트레스 테스트의 진행에는 어떤 방법론들이 있을까요?
  
  Soak Test : 한참 동안 부하를 가해서, 메모리 누수나 자원 누수를 알아내는 테스트입니다.  
  Negative Test : 부하를 발생시킨 상태에서 특정 시스템 구성요소 중 일부를 제거하는 테스트입니다.  
  Fatigue Test : 대역폭 용량을 뛰어넘는 부하를 발생시키는 테스트입니다.  
    
* AWS의 Auto Scaling은 어떤 서비스일까요? Fargate에서는 어떻게 적용할 수 있을까요?  
  
  특정 임계치를 설정하고 임계치를 초과하거나 하락하면 리소스가 스케일 아웃되게 자동으로 설정해주는 서비스입니다.  
  예약을 걸어 특정이 시간이되면 리소스가 늘어나고 줄어들 수 있게 설정할 수 있습니다.  
  Fargate에는 CPU 임계치나 Memory등 임계치를 초과하면 컨테이너를 스케일 아웃하여 부하를 분산할 수 있습니다. 또한, 특정 시간대에 컨테이너가 늘어날 수 있도록 조절 할 수있습니다.   

* Lambda의 동시 실행은 어떠한 개념일까요? 부하가 많은 서비스에서 이 지표를 어떻게 모니터링 해야 할까요?  
    
   동시성은 특정 시각에 함수가 제공하는 요청의 수입니다. 함수가 호출되면 Lambda는 함수의 인스턴스를 할당하여 이벤트를 처리합니다. 함수 코드가 실행을 마치면, 다른 요청을 처리할 수 있습니다. 요청을 처리하는 동안 함수가 다시 호출되면, 다른 인스턴스가 할당되어 함수의 동시성이 증가합니다. 동시성에는 리전의 모든 함수가 공유하는 리전 할당량이 적용됩니다.  
   두 가지 유형의 동시성을 사용할 수 있습니다.  
  
예약된 동시성 – 예약된 동시성은 해당 함수로만 사용할 수 있는 요청 풀을 생성하고, 해당 함수가 예약되지 않은 동시성을 사용하지 못하게 합니다.
  
프로비저닝된 동시성 – 프로비저닝된 동시성은 함수의 호출에 응답할 준비가 되도록 요청된 수의 실행 환경을 초기화합니다.

## Quest
* 우리의 컨테이너 기반 서버를 일부러 약간 무겁게 만들어 봅시다. 일부러 서버의 부하를 주려면 어떤 방법이 있을까요?
* Artillery를 이용하여 스트레스 테스트 시나리오를 작성하고, 부하를 가해 보세요.
* Fargate의 Auto Scaling 기능을 설정하여, 초당 일정 이상의 부하가 걸리면 자동으로 컨테이너를 늘리고, 부하가 줄면 자동으로 컨테이너의 수를 줄이게 만들어 보세요.

1. exposed 된 프로퍼티가 아니더라도 특정 약속된 이름의 emits 을 통해 실행된 값을 리턴으로 받고싶다.
2. 팝업이 닫히더라도 memory에서 삭제하지 않을 수 있다.
3. onAction, onVanished 훅이있어서

msgBoxWrapper: 프레임워크 메시지박스를 래핑한다
- 구성요소
  - 메시지 래핑된 컴포넌트
  - 메시지 컴포넌트
  - 하위 컴포넌트
- 하는 역할
  - await Msgbox(child: VNode, emitKey="onVanished")
  - 이 놈은 메시지 박스를 호출하고 닫힐경우 에밋키 발생
  - 
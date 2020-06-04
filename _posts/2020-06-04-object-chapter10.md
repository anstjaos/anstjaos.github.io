---
title: "[Object] 10장"
excerpt: "Object 10장 요약"

categories:
 - Study
tags:
 - Object
 - OOP
 - UML
 - Study
 - 요약
 - 정리
---



# 10\. 상속과 코드 재사용

재사용 관점에서 <b>상속</b>이란 클래스 안에 정의된 인스턴스 변수와 메서드를 자동으로 새로운 클래스에 추가하는 구현 기법이다. 객체지향에서는 상속 외에도 코드를 효과적으로 재사용할 수 있는 방법이 한 가지 더 있다. 새로운 클래스의 인스턴스 안에 기존 클래스의 인스턴스를 포함시키는 방법으로 흔히 <b>합성</b>이라고 부른다.

## 상속과 중복 코드

### DRY 원칙

중복 코드는 변경을 방해한다. 프로그램의 본질은 비즈니스와 관련된 지식을 코드로 변환하는 것이다. 그에 맞춰 지식을 표현하는 코드 역시 변경해야 한다.

중복 코드가 가지는 가장 큰 문제는 <b>코드를 수정하는 데 필요한 노력을 몇 배로 증가</b>시킨다는 것이다.
중복 여부를 판단하는 기준은 변경이다. 요구사항이 변경됐을 때 두 코드를 함께 수정해야 한다면 이 코드는 중복이다.

신뢰할 수 있고 수정하기 쉬운 소프트웨어를 만드는 효과적인 방법 중 하나는 <b>중복을 제거</b>하는 것이다. 프로그래머들은 <b>DRY 원칙</b>을 따라야 한다. DRY는 '반복하지 마라'라는 뜻의 <b>Don't Repeat Yourself</b>의 첫 글자를 모아 마든 용어로 간단히 말해 동일한 지식을 중복하지 말라는 것이다.

DRY 원칙은 <b>한 번, 단 한번(Once and Only Once) 원칙</b> 또는 <b>단일 지점 제어(Single-Point Control) 원칙</b>이라고도 부른다.



### 중복과 변경

#### 중복코드 살펴보기

``` java
public class Phone {
    private Money amount;
    private Duration seconds;
    private List<Call> calls = new ArrayList<>();

    public Phone(Money amount, Duration seconds) {
        this.amount = amount;
        this.seconds = seconds;
    }
    ...
    public Money calculateFee() {
        Money result = Money.ZERO;

        for(Call call: calls) {
            result = result.plus(amount.times(call.getDuration().getSeconds() /                                                                 seconds.getSeconds()));
        }

        return result;
    }
}
```

``` java
public class NightlyDiscountPhone {
    private static final int LATE_NIGHT_HOUR = 22;

    private Money nightlyAmount;
    private Money regularAmount;
    private Duration seconds;
    private List<Call> calls = new ArrayList<>();

    public NightlyDiscountPhone(Money nightlyAmount, Money regularAmount, Duration seconds) {
        this.nightlyAmount = nightlyAmount;
        this.regularAmount = regularAmount;
        this.seconds = seconds;
    }
    ...
    public Money calculateFee() {
        Money result = Money.ZERO;

        for(Call call : calls) {
            if (call.getForm().getHour() >= LATE_NIGHT_HOUR) {
                result = result.plus(
                        nightlyAmount.times(call.getDuration().getSeconds() /                                                                       seconds.getSeconds()));
            } else {
                result = result.plus(
                        regularAmout.times(call.getDuration().getSeconds() /
                                                              seconds.getSeconds()));
            }
        }

        return result;
    }
}
```

#### 중복 코드 수정하기

현재 통화 요금을 계산하는 로직은 Phone과 NightlyDiscountPhone 양쪽 모두에 구현돼있기 때문에 세금을 추가하기 위해서는 두 클래스를 함께 수정해야 한다.

많은 코드 더미 속에서 어떤 코드가 중복인지를 파악하는 일은 쉬운 일이 아니다. 중복 코드는 항상 함께 수정돼야 하기 때문에 수정할 때 하나라도 빠트린다면 버그로 이어질 것이다.

<br>
<br>
<b>중복 코드는 새로운 중복 코드를 부른다.</b> 더 큰 문제는 중복 코드가 늘어날 수록 애플리케이션은 변경에 취약해지고 버그가 발생할 가능성이 높아진다는 것이다.

#### 타입 코드 사용하기

두 클래스 사이의 중복 코드를 제거하는 한 가지 방법은 <b>클래스를 하나로 합치는 것</b>이다. 타입 코드를 사용하는 클래스는 낮은 응집도와 높은 결합도라는 문제에 시달리게 된다.



### 상속을 이용해서 중복 코드 제거하기

상속의 기본 아이디어는 이미 존재하는 클래스와 유사한 클래스가 필요하다면 코드를 복사하지 말고 상속을 이용해 코드를 재사용하라는 것이다.

상속을 염두에 두고 설계되지 않은 클래스를 상속을 이용해 재사용하는 것은 생각처럼 쉽지 않다. 요구사항과 구현 사이의 차이가 크면 클수록 코드를 이해하기 어려워진다. 잘못 사용된 상속은 이 차이를 더 크게 벌린다.

상속을 이용해 코드를 재사용하기 위해서는 부모 클래스의 개발자가 세웠던 가정이나 추론 과정을 정확하게 이해해야 한다. 이것은 자식 클래스의 작성자가 부모 클래스의 구현 방법에 대한 정확한 지식을 가져야 한다는 것을 의미한다.

<b>따라서 상속은 결합도를 높인다.</b>

### 강하게 결합된 Phone과 NightlyDiscountPhone

``` java
public class NightlyDiscountPhone extends Phone {
    public NightlyDiscountPhone(Money nightlyAmount, Money regularAmount, Duration                  seconds, double taxRate) {
        super(regularAmount, seconds, taxRate);
        ...
    }

    @Override
    public Money calculateFee() {
        ...
        return result.minus(nightlyFee.plus(nightlyFee.times(getTaxRate())));
    }
}
```

> <b>상속을 위한 경고 1</b>
> 자식 클래스의 메서드 안에서 super 참조를 이용해 부모 클래스의 메서드를 직접 호출할 경우 두 클래스는 강하게 결합된다. super 호출을 제거할 수 있는 방법을 찾아 결합도를 제거하라.

이처럼 상속 관계로 연결된 자식 클래스가 부모 클래스의 변경에 취약해지는 현상을 가리켜 <b>취약한 기반 클래스 문제</b>라고 부른다.



## 취약한 기반 클래스 문제

강한 결합도로 인해 자식 클래스는 부모 클래스의 불필요한 세부사항에 엮이게 된다. 부모 클래스의 작은 변경에도 자식 클래스는 컴파일 오류와 실행 에러라는 고통에 시달려야 할 수도 있다.

이처럼 부모 클래스의 변경에 의해 자식 클래스가 영향을 받는 현상을 <b>취약한 기반 클래스 문제(Fragile Base Class Problem, Brittle Base Class Problem)</b>이라고 부른다.

취약한 기반 클래스 문제는 상속이라는 문맥 안에서 <b>결합도가 초래하는 문제점</b>을 가리키는 용어다. 상속 관계를 추가할수록 전체 시스템의 결합도가 높아진다는 사실을 알고 있어야 한다. 상속은 자식 클래스를 점진적으로 추가해서 기능을 확장하는 데는 용이하지만 높은 결합도로 인해 부모 클래스를 점진적으로 개선하는 것은 어렵게 만든다.

상속은 자식 클래스가 부모의 <b>구현 세부사항에 의존</b>하도록 만들기 때문에 캡슐화를 약화시킨다. 상속을 사용하면 퍼블릭 인터페이스가 아닌 구현을 변경하더라도 자식 클래스가 영향을 받기 쉬워진다.

객체지향의 기반은 <b>캡슐화를 통한 변경의 통제</b>다. 상속은 코드의 재사용을 위해 캡슐화의 장점을 희석시키고 구현에 대한 결합도를 높임으로써 객체지향이 가진 강력함을 반감시킨다.



### 불필요한 인터페이스 상속 문제

상속을 잘못 사용한 대표적인 사례는 `java.util.Stack`이다. 부모 클래스의 상속받은 메서드를 사용할 경우 자식 클래스의 규칙이 위반될 수 있다.

Stack은 가장 나중에 추가된 요소가 가장 먼저 추출되는(Last In First Out, LIFO) 자료구조인 스택을 구현한 클래스다. Vector는 임의의 위치에서 요소를 추출하고 삽입할 수 있는 리스트 자료 구조의 구현체로서 java.util.List의 초기 버전이라고 할 수 있다. Vector를 재사용하기 위해 Stack을 Vector의 자식 클래스로 구현했다.

안타깝게도 Stack이 Vector를 상속받기 때문에 Stack의 퍼블릭 인터페이스에 Vector의 퍼블릭 인터페이스가 합쳐진다. 따라서 Stack에게 상속된 Vector의 퍼블릭 인터페이스를 이용하면 <b>임의의 위치에서 요소를 추가하거나 삭제</b>할 수 있다.

``` java
Stack<String> stack = new Stack<>();
stack.push("1st");
stack.push("2nd");
stack.push("3rd");

stack.add(0, "4th");

assertEquals("4th", stack.pop());   // 에러!
```

문제의 원인은 Stack이 규칙을 무너뜨릴 여지가 있는 위험한 Vector의 퍼블릭 인터페이스까지도 함께 상속받았기 때문이다. <b>인터페이스 설계는 제대로 쓰기엔 쉽게, 엉터리로 쓰기엔 어렵게 만들어야 한다.</b>

객체지향의 핵심은 객체들의 협력이다. 단순히 코드를 재사용하기 위해 <b>불필요한 오퍼레이션이 인터페이스에 스며들도록 방치해서는 안된다.</b>

> <b>상속을 위한 경고 2</b>
> 상속받은 부모 클래스의 메서드가 자식 클래스의 내부 구조에 대한 규칙을 깨트릴 수 있다.



### 메서드 오버라이딩의 오작용 문제

``` java
public class InstrumentedHashSet<E> extends HashSet<E> {
    private int addCount = 0;

    @Override
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        addCount += c.size();
        return super.addAll(c);
    }
}
```

``` java
InstrumentedHashSet<String> languages = new InstrumentedHashSet<>();
languages.addAll(Arrays.asList("java", "Ruby", "Scala));
```

위 코드를 실행한 후에 addCount의 값이 3이 될 거라고 예상할 것이다. 하지만 실제로 실행한 후의 addCount의 값은 6이다. 그 이유는 부모 클래스인 HashSet의 addAll 메서드 안에서 add 메서드를 호출하기 때문이다.

> <b>상속을 위한 경고 3</b>
> 자식 클래스가 부모 클래스의 메서드를 오버라이딩할 경우 부모 클래스가 자신의 메서드를 사용하는 방법에 자식 클래스가 결합될 수 있다.

조슈아 블로치는 클래스가 상속되기를 원한다면 상속을 위해 <b>클래스를 설계하고 문서화</b>해야 하며, 그렇지 않은 경우에는 상속을 금지시켜야 한다고 주장한다.

설계는 <b>트레이드오프 활동</b>이라는 사실을 기억하라. 상속은 코드 재사용을 위해 캡슐화를 희생한다.



### 부모 클래스와 자식 클래스의 동시 수정 문제

상속을 사용하면 자식 클래스가 부모 클래스의 구현에 강하게 결합되기 때문에 이 문제를 피하기는 어렵다.

<b>결합도</b>란 다른 대상에 대해 알고 있는 지식의 양이다. 상속은 기본적으로 부모 클래스의 구현을 재사용한다는 기본 전제를 따르기 때문에 자식 클래스가 부모 클래스의 내부에 대해 속속들이 알도록 강요한다.

> <b>상속을 위한 경고 4</b>
> 클래스를 상속하면 결합도로 인해 자식 클래스와 부모 클래스의 구현을 영원히 변경하지 않거나, 자식 클래스와 부모 클래스를 동시에 변경하거나 둘 중 하나를 선택할 수 밖에 없다.



## Phone 다시 살펴보기

### 추상화에 의존하자

NightlyDiscountPhone의 가장 큰 문제점은 Phone에 강하게 결합돼 있기 때문에 Phone이 변경될 경우 함께 변경될 가능성이 높다는 것이다. 이 문제를 해결하는 가장 일반적인 방법은 자식 클래스가 부모 클래스의 구현이 아닌 <b>추상화에 의존</b>하도록 만드는 것이다. 정확하게 말하면 <b>부모 클래스와 자식 클래스 모두 추상화에 의존</b>하도록 수정해야 한다.

코드 중복을 제거하기 위해 상속을 도입할 때 따르는 두 가지 원칙이 있다.

* 두 메서드가 유사하게 보인다면 <b>차이점을 메서드로 추출</b>하라. 메서드 추출을 통해 두 메서드를 동일한 형태로 보이도록 만들 수 있다.
* 부모 클래스의 코드를 하위로 내리지 말고 <b>자식 클래스의 코드를 상위로 올려라.</b> 부모 클래스의 구체적인 메서드를 자식 클래스로 내리는 것보다 자식 클래스의 추상적인 메서드를 부모 클래스로 올리는 것이 <b>재사용성과 응집도 측면</b>에서 더 뛰어난 결과를 얻을 수 있다.



### 차이로 메서드를 추출하라

가장 먼저 할 일은 <b>중복 코드 안에서 차이점을 별도의 메서드로 추출</b>하는 것이다. 이것은 흔히 말하는 `"변하는 것으로부터 변하지 않는 것을 분리하라."`, 또는 `"변하는 부분을 찾고 이를 캡슐화하라"` 라는 조언을 메서드 수준에서 적용한 것이다.

<br>
먼저 Phone에서 메서드를 추출하자.

``` java
public class Phone {
    ...
    public Money calculateFee() {
        Money result = Money.ZERO;

        for(Call call : calls) {
            result = result.plus(calculateCallFee(call));
        }

        return result;
    }

    private Money calculateCallFee(Call call) {
        return amount.times(call.getDuration().getSeconds() / seconds.getSeconds());
    }
}
```

NightlyDiscountPhone의 경우에도 동일한 방식으로 메서드를 추출하자.

``` java
public class NightlyDiscountPhone {
    ...
    public Money calculateFee() {
        Money result = Money.ZERO;

        for(Call call : calls) {
            result = result.plus(calculateCallFee(call));
        }

        return result;
    }

    private Money calculateCallFee(Call call) {
        if (call.getFrom().getHour() >= LATE_NIGHT_HOUR) {
            return nightlyAmount.times(call.getDuration().getSeconds() /
                                                            seconds.getSeconds());
        } else {
            return regularAmount.times(call.getDuration().getSeconds() /
                                                            seconds.getSeconds());
        }
    }
}
```

이제 같은 코드를 부모 클래스로 올리는 일만 남았다.



### 중복 코드를 부모 클래스로 올려라

``` java
public abstract class AbstractPhone {}

public class Phone extends AbstractPhone { ... }

public class NightlyDiscountPhone extends AbstractPhone { ... }
```

이제 Phone과 NightlyDiscountPhone의 공통 부분을 부모 클래스로 이동시키자.

``` java
public abstract class AbstractPhone {
    private List<Call> calls = new ArrayList<>();

    public Money calculateFee() {
        Money result = Money.ZERO;

        for(Call call : calls) {
            result = result.plus(calculateCallFee(call));
        }

        return result;
    }

    abstract protected Money calculateCallFee(Call call);
}
```



![10.1.png](https://user-images.githubusercontent.com/37808594/83730829-98f04b00-a684-11ea-844e-c5e52f0574cc.png)<br>
<i><b>그림 10.1</b> 리팩터링 후의 상속 계층</i>

자식 클래스들 사이의 공통점을 부모 클래스로 옮김으로써 실제 코드를 기반으로 상속 계층을 구성할 수 있다.



### 추상화가 핵심이다.

지금까지 살펴본 모든 장점은 클래스들이 추상화에 의존하기 때문에 얻어지는 장점이다. 상속 계층이 코드를 진화시키는 데 걸림돌이 된다면 추상화를 찾아내고 상속 계층 안의 클래스들이 그 추상화에 의존하도록 코드를 리팩터링하라.



### 의도를 드러내는 이름 선택하기

기존의 세 클래스들의 이름은 애매모호함이 있다. 따라서 다음과 같이 이름을 변경하는 것이 적절할 것이다.

``` java
public abstract class Phone { ... }

public class RegularPhone extends Phone { ... }

public class NightlyDiscountPhone extends Phone { ... }
```



### 세금 추가하기

클래스 사이의 상속은 자식 클래스가 부모 클래스가 구현한 행동뿐만 아니라 <b>인스턴스 변수</b>에 대해서도 결합되게 만든다.

인스턴스 변수의 목록이 변하지 않는 상황에서 <b>객체의 행동만 변경</b>된다면 상속 계층에 속한 각 클래스들을 독립적으로 진화시킬 수 있다. 결과적으로 책임을 아무리 잘 분배하더라도 <b>인스턴스 변수의 추가</b>는 종종 상속 계층 전반에 걸친 변경을 유발한다.

상속으로 인한 클래스 사이의 결합을 피할 수 있는 방법은 없다. 우리가 원하는 것은 행동을 변경하기 위해 인스턴스 변수를 추가하더라도 상속 계층 전체에 걸쳐 부작용이 퍼지지 않게 막는 것이다.



## 차이에 의한 프로그래밍

기존 코드와 다른 부분만을 추가함으로써 애플리케이션의 기능을 확장하는 방법을 <b>차이에 의한 프로그래밍(programming by difference)</b>이라고 부른다. 상속을 이용하면 이미 존재하는 클래스의 코드를 쉽게 재사용할 수 있기 때문에 애플리케이션의 점진적인 정의가 가능해진다.

<b>차이에 의한 프로그래밍의 목표</b>는 중복 코드를 제거하고 코드를 재사용하는 것이다. <b>중복을 제거</b>하기 위해서는 코드를 재사용 가능한 단위로 분해하고 재구성해야 한다. <b>코드를 재사용</b>하기 위해서는 중복 코드를 제거해서 하나의 모듈로 모아야 한다. 따라서 중복 코드를 제거하기 위해 최대한 코드를 재사용해야 한다.

<b>재사용 가능한 코드</b>란 심각한 버그가 존재하지 않는 코드다. 따라서 코드를 재사용하면 코드의 품질은 유지하면서도 코드를 작성하는 노력과 테스트는 줄일 수 있다.

상속이 코드 재사용이라는 측면에서 매우 강력한 도구인 것은 사실이지만 강력한 만큼 잘못 사용할 경우에 돌아오는 피해 역시 크다는 사실을 알아야 한다.
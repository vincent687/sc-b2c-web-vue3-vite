---
title: Flutter 101
theme: simple #night
revealOptions:
  transition: 'fade'
---

## Flutter 101

###### by Benny Ng

---

## about me

- coder, learner, teacher, father
- co-founded **42 Labs**, **F5 Works**
- build stuff for commercial & community
- recent interests: **Flutter**, **NuxtJS**, **NestJS**, **Istio**

---

## overview

- released by Google in 2017
- cross platforms development kits
- code in language **Dart**
- render at **60 FPS**
- suitable for startups & enterprises

---

## Dart

- OOP
- static type
- single-threaded
- garbage-collected
- multi process (isolate)
- AOT and JIT

---

## architecture

![architecture](architecture.png)

---

## cross platforms

- iOS / Android / Fuchsia
- Mac / Windows
- web / Raspberry Pi
- Skia rendering engine (written in C++)

---

## community & prospect

- Github stars **~91k** _(Reative Native ~86k)_
- over **2 millions** developers
- **50,000** apps launched in all time
- **10,000** apps launched in **last month**
- adopters: Tencent, Stadia, Square, NuBank

---

## vs React Native

|          | Flutter    | React Native |
| -------- | ---------- | ------------ |
| Release  | 2017       | 2015         |
| Language | Dart       | JavaScript   |
| Github   | 91.2k ★    | 86.6k ★      |
| License  | Free (BSD) | Free (MIT)   |

Note:

- https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a

---

## Developer eXperience

- IDE integration (VSCode, Android Studio) <!-- .element: class="fragment" data-fragment-index="1" -->
- built-in package manager <!-- .element: class="fragment" data-fragment-index="1" -->
- built-in hot restart, hot-reload <!-- .element: class="fragment" data-fragment-index="1" -->
- built-in debugger <!-- .element: class="fragment" data-fragment-index="1" -->
- built-in profiler <!-- .element: class="fragment" data-fragment-index="1" -->
- CodePen supports <!-- .element: class="fragment" data-fragment-index="1" -->
- no node_modules :) <!-- .element: class="fragment" data-fragment-index="6" -->

---

## UI Components

- [Flutter Gallery (official)](https://flutter.github.io/gallery/#/)
- [Widget index (official)](https://flutter.dev/docs/reference/widgets)
- [Syncfusion](https://www.syncfusion.com/flutter-widgets) ([web demo](https://flutter.syncfusion.com/))
- [CodePen](https://codepen.io/flutter) ([demo](https://blog.codepen.io/2020/04/15/flutter-on-codepen/))
- Material Design, cupertino

---

## CI / CD

- strong CLI tools (build, format, doctor, generate)
- single command build binary
- Fastlane support

---

## adopter NuBank

- fintech, 10B value, 2000+ employers
- adopted Flutter in 2019
- specialists don't scale well
- culture fit (learn until die)
- less fragile for breaking changes

Note:

https://medium.com/building-nubank/https-medium-com-freire-why-nubank-chose-flutter-61b80b568772

---

## adopter NuBank

![nubank](nubank.png)

#### [credit](https://medium.com/building-nubank/https-medium-com-freire-why-nubank-chose-flutter-61b80b568772)

Note:

https://medium.com/building-nubank/https-medium-com-freire-why-nubank-chose-flutter-61b80b568772

---

#### demo time

Note:

- switch to example in VS code
- change theme on example

---

## enable Flutter web

```sh
$ flutter channel beta
$ flutter upgrade
$ flutter config --enable-web
$ flutter create .
$ flutter devices
$ flutter run -d chrome
```

---

#### web live demo

<iframe frameborder="0" width="256" height="512" src="https://flutter-101.surge.sh/#/"></iframe>

https://flutter-101.surge.sh/#/

---

## more...

- state management (BLoc, provider, redux)
- [Flutter clock challenge](https://medium.com/flutter/its-time-the-flutter-clock-contest-results-dcebe2eb3957)
- animation ([CustomPaint](https://medium.com/flutter-community/flutter-custom-painter-circular-wave-animation-bdc65c112690), shader, [flare](https://medium.com/rive/building-a-water-tracking-app-with-flare-flutter-f03de436dba3))
- theming
- native hardware integrate (Channel)
- channel (stable, beta, dev, master)
- multi-processing (isolate)
- code generate

---

## code generate

```
# example.json
$ flutter generate
```

```json
{
  "name": "Container",
  "params": {
    "color": "#Color(0xFF22DD11)",
    "child": {
      "name": "Text",
      "params": {
        "0": "Hello, World"
      }
    }
  }
}
```

Note:

https://towardsdatascience.com/the-3-secret-weapons-that-changed-my-python-editor-forever-c99f7b2e0084

---

## code generate

```dart
import 'package:flutter/material.dart';
import 'example.dart' as generated; // May not exist, it is okay!

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        body: ListView(
          children: [
            // use our generated widget
            generated.GeneratedWidget(),
          ]
        ),
      ),
    );
  }
}
```

---

## wait a sec...

- framework code bumped up app size
- Dart still young
- Codes is very verbose
- Flutter still young
- web is beta only
- resources in Chinese
- chances Google abandon it

---

## references

- https://flutter.dev/
- https://flutter.github.io/gallery/
- https://flutterx.com/
- https://dart.dev/guides/language/effective-dart
- https://flutter.cn/

---

## Q & A

---

## keep in touch

- benny.ng@gmail.com
- https://github.com/bennyng
- https://twitter.com/hin556
- https://github.com/bennyng/flutter-101

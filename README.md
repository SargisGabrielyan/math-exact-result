# Math Exact Result (Math Floating Point)

This package gives only arithmetic simple operations addition, subtraction, multiplication, and division which return the correct arithmetic result.
## Examples

### addition

```javascript
import { add } from 'math-exact-ersult';

add(12, 34); // 46
add('12', 34); // 46
add('12', '34'); // 46
add(0.1, 0.2); // 0.3
add(11, 45, 0.1, 31.5); // 87.6
add(-66, 42); // -24
add(-23, -57); // -80
```

### subtraction
```javascript
import { subtract } from 'math-exact-ersult';

subtract(34, 12); // 22
subtract('43', 11); // 32
subtract('56', '223'); // -167
subtract(0.2, 0.1); // 0.1
subtract(84, 24, 0.3); // 59.7
subtract(-76, 42); // -118
subtract(-80, -34); // -46
```

### multiplication
```javascript
import { multiply } from 'math-exact-ersult';

multiply(4, 5); // 20
multiply('43', 3); // 129
multiply('2', '12'); // 24
multiply(0.2, 0.1); // 0.02
multiply(4, 55, 0.3); // 66
multiply(-7, 4); // -28
multiply(-32, -5); // -160
```

### division
```javascript
import { divide } from 'math-exact-ersult';

divide(24, 6); // 4
divide('48', 8); // 6
divide('27', '3'); // 9
divide(0.4, 0.2); // 2
divide(128, 2, 4); // 16
divide(87, 5.4); // 16,11111111111111
divide(-28, 4); // -7
divide(-32, -6); // -4
```

## Difference between pure javascript and 'math-exact-result'

| type           | operation |      javascript      | math-exact-result |
|----------------|:----------|:--------------------:|:-----------------:|
| addition       | 0.2 + 0.1 | 0.30000000000000004  |        0.3        |
| subtraction    | 0.3 - 0.1 | 0.19999999999999998  |        0.2        |
| multiplication | 0.1 * 0.7 | 0.06999999999999999  |       0.07        |              |
| division       | 0.3 / 6   | 0.049999999999999996 |       0.05        |

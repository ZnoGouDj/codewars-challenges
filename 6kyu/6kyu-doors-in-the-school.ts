type N = number;

function doors(n: N): N {
  let arr = Array(n).fill(false);

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((j + 1) % i === 0) {
        arr[j] = !arr[j];
      }
    }
  }

  return arr.filter(el => !!el).length;
} //? Too slow

//* In progress

function doors1(n) {
  if (n >= 1 && n < 5) {
    return 1;
  } else if (n >= 5 && n < 9) {
    return 2;
  } else if (n >= 9 && n < 16) {
    return 3;
  } else if (n >= 16 && n < 25) {
    return 4;
  } else if (n >= 25 && n < 36) {
    return 5;
  } else if (n >= 36 && n < 49) {
    return 6;
  } else if (n >= 49 && n < 64) {
    return 7;
  } else if (n >= 64 && n < 81) {
    return 8;
  } else if (n >= 81 && n < 100) {
    return 9;
  } else if (n >= 100 && n < 121) {
    return 10;
  }
}

//! Final

const doorsFinal = _ => Math.floor(Math.sqrt(_));

// console.log(doors(5)); // 2
// console.log(doors(10)); // 3
// console.log(doors(100)); // 10
console.log(
  doors(1),
  doors(1),
  doors(2),
  doors(3),
  doors(4),
  doors(5),
  doors(6),
  doors(7),
  doors(8),
  doors(9),
  doors(10),
  doors(11),
  doors(12),
  doors(13),
  doors(14),
  doors(15),
  doors(16),
  doors(17),
  doors(18),
  doors(19),
  doors(20),
  doors(21),
  doors(22),
  doors(23),
  doors(24),
  doors(25),
  doors(26),
  doors(27),
  doors(28),
  doors(29),
  doors(30),
  doors(31),
  doors(32),
  doors(33),
  doors(34),
  doors(35),
  doors(36),
  doors(37),
  doors(38),
  doors(39),
  doors(40),
  doors(41),
  doors(42),
  doors(43),
  doors(44),
  doors(45),
  doors(46),
  doors(47),
  doors(48),
  doors(49),
  doors(50),
  doors(51),
  doors(52),
  doors(53),
  doors(54),
  doors(55),
  doors(56),
  doors(57),
  doors(58),
  doors(59),
  doors(60),
  doors(61),
  doors(62),
  doors(63),
  doors(64),
  doors(65),
  doors(66),
  doors(67),
  doors(68),
  doors(69),
  doors(70),
  doors(71),
  doors(72),
  doors(73),
  doors(74),
  doors(75),
  doors(76),
  doors(77),
  doors(78),
  doors(79),
  doors(80),
  doors(81),
  doors(82),
  doors(83),
  doors(84),
  doors(85),
  doors(86),
  doors(87),
  doors(88),
  doors(89),
  doors(90),
  doors(91),
  doors(92),
  doors(93),
  doors(94),
  doors(95),
  doors(96),
  doors(97),
  doors(98),
  doors(99),
  doors(100),
  doors(101),
  doors(102),
  doors(103),
  doors(104),
  doors(105),
  doors(106),
  doors(107),
  doors(108),
  doors(109),
  doors(110),
  doors(111),
  doors(112),
  doors(113),
  doors(114),
  doors(115),
  doors(116),
  doors(117),
  doors(118),
  doors(119),
  doors(120),
  doors(121)
);

let n =
  '1 1 1 1 2 2 2 2 2 3 3 3 3 3 3 3 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 11';

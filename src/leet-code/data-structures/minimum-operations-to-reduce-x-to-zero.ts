// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/submissions/

// n contiguous elements from left
// plus
// m contiguous elements from right
// should sum to number x
// return n + m

const sumArr = (arr: number[]): number => arr.reduce((acc, curr) => acc + curr, 0)

export function minOperations(nums: number[], x: number): number {
    let minDigits = Number.MAX_VALUE

    for (let i=0; i<nums.length; i++) {
        const leftPart = sumArr(nums.slice(0,i));
        if (leftPart > x) { break; }

        for (let j=0; j<nums.length; j++) {
            const rightPart = sumArr(nums.slice(nums.length-j))

            const sum = leftPart + rightPart
            if (sum > x) { break; }

            const curDigits = i + j
            if (sum == x && curDigits < minDigits) {
                minDigits = curDigits
            }
        }
    }
    return minDigits == Number.MAX_VALUE ? -1 : minDigits
};

describe('minOperations', function() {
    it('passes test cases', function() {
        expect(minOperations([1,1,4,2,3], 5)).to.deep.equal(2);
        expect(minOperations([5,2,3,1,1], 5)).to.deep.equal(1);
        // expect(minOperations([9677,8800,4181,5725,1936,9989,2950,630,1045,7471,2853,7557,8279,6189,9110,9274,8161,7216,2159,3993,9991,8992,2084,687,3221,8675,7167,4373,5326,9977,6615,3065,7575,738,4000,1196,8303,2697,7901,3171,6265,200,2865,8786,5419,2821,3081,6327,323,2652,8971,8031,3417,2539,9080,4831,1513,5067,5835,482,3231,3656,1361,2769,5570,9832,4527,9890,4992,8613,782,3051,6766,7709,6759,9646,4724,8025,8508,4680,4691,1248,4386,5971,3717,425,6066,1091,879,53,6055,9781,3322,1652,2902,8153,4144,2293,4023,4430,2168,1072,4182,3709,4786,9650,4981,2762,286,8234,802,589,9838,8027,7884,4949,3943,4040,4521,2327,5338,3374,2276,3209,450,203,125,9525,2313,4142,9250,2628,7640,6889,9111,8824,9326,4855,1744,2239,5299,6531,3164,1170,5451,9647,8820,8025,9091,841,9462,1175,4305,781,8791,723,6374,6865,2750,8843,3529,3716,1030,7768,1552,9145,3323,7587,6872,1308,4035,6559,2822,4133,7847,2132,9227,7808,1541,5222,8864,8152,5547,5743,4143,4297,9461,3681,7625,6170,9964,9438,6290,3609,8987,5463,720,915,4891,5239,7030,5074,3369,9764,5098,9750,1934,4674,9791,8423,1548,5092,4497,1425,4367,4852,3791,2823,3368,5978,6958,4132,5580,4516,7184,1601,4752,9249,2666,3034,1941,6044,1162,4615,7343,3683,1475,5945,4172,5785,1582,4703,1986,9101,4353,9243,8530,8433,2937,4160,7913,2032,1949,5473,8309,5610,8102,2773,730,4829,6658,2919,6920,648,8631,4456,7870,335,3775,6930,9846,3590,5701,3206,3027,5536,3797,8618,6995,9051,2991,2020,8032,9765,7507,5396,7056,911,9526,3706,7037,3607,821,1080,137,9150,5426,9452,4999,152,1582,7533,155,7711,6266,1483,3391,298,7632,7866,2292,5370,7830,5393,861,8244,8317,1386,4087,1724,2064,287,236,6413,1107,3916,9210,5551,1215,4716,2700,7655,8248,5326,2190,7768,2162,8147,6777,9500,7404,8477,5124,5365,7656,6205,4141,2325,2323,8941,2362,877,1238,2511,8066,3925,3346,6199,2297,6354,3744,2550,4880,1316,1221,7154,5901,6523,6569,1538,7452,6762,2091,1032,8186,6566,3896,1461,3465,7504,3872,7438,7889,2143,6878,5959,5409,7209,7293,169,1738,2322,2022,2033,3482,1326,8896,7949,8556,6995,6806,7858,7885,7422,97,2988,9728,5824,7340,5919,1112,4695,774,4530,9651,8986,3937,2908,7192,1909,5915,2738,3378,9484,3873,5894,6579,6734,9749,4699,4184,4979,5346,3789,258,5322,646,5572,104,9206,6917,5813,1652,7135,4077,2669,5888,647,2710,5589,2427,4886,1793,8248,5746,3353,8671,457,6831,6894,1317,7538,1679,1,6557,3307,2755,4531,573,8981,9834,2013,4547,9935,6564,8135,3282,3870,4645,8343,3989,883,4826,8314,5792,1108,9723,7820,8030,8701,6533,3847,775,3901,8321,8864,2396,7367,9010,1967,4651,373,6715,4699,6128,891,4357,2248,7661,5428,7353,9164,2935,3547,7872,1329,1720,1448,4976,8777,4038,1627,4421,2495,8644,3769,2323,7254,7290,6304,1263,5080,130,5866,9920,5776,8547,3995,3576,6480,8522,4854,4516,9532,3667,7794,6163,3489,3639,9856,6598,1211,2015,8485,1171,4644,6312,230,2146,5910,3305,7412,8450,2756,5384,9323,3771,7307,5595,8401,4987,6524,782,9804,5416,9426,1843,1369,3399,782,5933,3125,935,4117,803,5476,9063,8892,9227,8265,5631,6652,9329,3760,7617,9971,2368,8664,944,7062,5024,3819,1653,6457,5877,9783,6007,787,5451,2068,514,453,4787,7669,1768,6816,1075,6104,7034,41,8063,1474,2972,875,6169,7429,574,2553,334,41,5063,3484,3468,4277,5413,9639,2515,9082,3862,2671,6142,4564,6621,376,6818,7803,813,8327,2617,4240,5514,1397,7102,2794,4246,209,8322,1889,1205,4495,4795,453,1196,6004,8215,7984,5445,3689,6363,9171,3839,1483,2763,6236,9020,9415,4218,1410,862,1052,937,174,3338,5060,4657,285,1940,5842,9250,3946,8743,7033,4400,54,4227,6681,7852,2379,7849,3537,872,4982,2552,330,4382,710,2868,5613,4680,9845,8185,6174,2763,9109,3785,5369,8066,2205,8465,7477,8312,2341,3436,7344,5561,4876,4846,8331,4955,6530,5389,5077,9866,502,4034,5408,5243,3137,6684,8011,2451,1909,8231,9157,2476,3495,5910,2790,6873,5238,1251,6975,9844,1577,4571,4595,2156,3877,7085,2514,5380,2778,224,515,8004,679,46,6414,8424,2333,6107,5241,1589,3213,2639,1937,7448,2832,3940,5114,60,4326,5463,8262,5550,5403,2611,158,864,7078,6935,106,8983,1234,895,4826,6786,7988,6373,7130,1605,7330,1605,6421,9052,6394,9744,5774,2691,7854,4188,3877,3864,7001,9853,300,1933,8902,4483,8880,9582,9599,9407,8205,4645,8166,6603,633,5860,9706,1830,9675,1816,956,8186,8966,195,2578,2833,2309,7955,5696,9163,2713,8249,2553,6753,166,2775,1995,2438,8906,9072,2113,3634,7218,192,425,2270,1144,3617,408,6325,4839,4955,5000,6171,6162,5307,6745,4693,5006,7493,5823,2865,8526,2208,4796,9264,8171,2853,8771,6707,9295,1099,2602,9207,7623,3611,2408,5133,9386,9739,3277,9910,9284,5611,5110,9540,6610,6124,5483,8782,9406,2323,3239,8654,4930,776,6818,8899,4973,4455,5231,4642,1838,7280], 284132523)).to.deep.equal(-1);
    })
})

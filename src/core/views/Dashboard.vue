<template>
    <div>
        <ul class="flex space-x-2 rtl:space-x-reverse">
            <li>
                <a href="javascript:;" class="text-primary hover:underline">Dashboard</a>
            </li>
            <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                <span>Finance</span>
            </li>
        </ul>
        <div class="pt-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
                <!-- Users Visit -->
                <div class="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
                    <div class="flex justify-between">
                        <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Users Visit</div>
                        <div class="dropdown">
                            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                <button type="button">
                                    <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
                                </button>
                                <template #content="{ close }">
                                    <ul @click="close()" class="text-black dark:text-white-dark">
                                        <li>
                                            <a href="javascript:;">View Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Edit Report</a>
                                        </li>
                                    </ul>
                                </template>
                            </Popper>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">$170.46</div>
                        <div class="badge bg-white/30">+ 2.35%</div>
                    </div>
                    <div class="flex items-center font-semibold mt-5">
                        <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Last Week 44,700
                    </div>
                </div>

                <!-- Sessions -->
                <div class="panel bg-gradient-to-r from-violet-500 to-violet-400">
                    <div class="flex justify-between">
                        <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Sessions</div>
                        <div class="dropdown">
                            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                <button type="button">
                                    <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
                                </button>
                                <template #content="{ close }">
                                    <ul @click="close()" class="text-black dark:text-white-dark">
                                        <li>
                                            <a href="javascript:;">View Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Edit Report</a>
                                        </li>
                                    </ul>
                                </template>
                            </Popper>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">74,137</div>
                        <div class="badge bg-white/30">- 2.35%</div>
                    </div>
                    <div class="flex items-center font-semibold mt-5">
                        <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Last Week 84,709
                    </div>
                </div>

                <!-- Time On-Site -->
                <div class="panel bg-gradient-to-r from-blue-500 to-blue-400">
                    <div class="flex justify-between">
                        <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Time On-Site</div>
                        <div class="dropdown">
                            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                <button type="button">
                                    <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
                                </button>
                                <template #content="{ close }">
                                    <ul @click="close()" class="text-black dark:text-white-dark">
                                        <li>
                                            <a href="javascript:;">View Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Edit Report</a>
                                        </li>
                                    </ul>
                                </template>
                            </Popper>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">38,085</div>
                        <div class="badge bg-white/30">+ 1.35%</div>
                    </div>
                    <div class="flex items-center font-semibold mt-5">
                        <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Last Week 37,894
                    </div>
                </div>

                <!-- Bounce Rate -->
                <div class="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
                    <div class="flex justify-between">
                        <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">Bounce Rate</div>
                        <div class="dropdown">
                            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                <button type="button">
                                    <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
                                </button>
                                <template #content="{ close }">
                                    <ul @click="close()" class="text-black dark:text-white-dark">
                                        <li>
                                            <a href="javascript:;">View Report</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Edit Report</a>
                                        </li>
                                    </ul>
                                </template>
                            </Popper>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
                        <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">49.10%</div>
                        <div class="badge bg-white/30">- 0.35%</div>
                    </div>
                    <div class="flex items-center font-semibold mt-5">
                        <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
                        Last Week 50.01%
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <!-- Favorites -->
                <div>
                    <div class="flex items-center mb-5 font-bold">
                        <span class="text-lg">Favorites</span>
                        <a href="javascript:;" class="ltr:ml-auto rtl:mr-auto text-primary hover:text-black dark:hover:text-white-dark"> See All </a>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:mb-5">
                        <!-- Bitcoin -->
                        <div class="panel">
                            <div class="flex items-center font-semibold mb-5">
                                <div class="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                                    <icon-bitcoin />
                                </div>
                                <div class="ltr:ml-2 rtl:mr-2">
                                    <h6 class="text-dark dark:text-white-light">BTC</h6>
                                    <p class="text-white-dark text-xs">Bitcoin</p>
                                </div>
                            </div>
                            <div class="mb-5 overflow-hidden">
                                <apexchart height="45" :options="bitcoin" :series="bitcoinSeries">
                                    <!-- loader -->
                                    <div class="min-h-[45px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                        <span
                                            class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
                                        ></span>
                                    </div>
                                </apexchart>
                            </div>
                            <div class="flex justify-between items-center font-bold text-base">
                                $20,000 <span class="text-success font-normal text-sm">+0.25%</span>
                            </div>
                        </div>

                        <!-- Ethereum -->
                        <div class="panel">
                            <div class="flex items-center font-semibold mb-5">
                                <div class="shrink-0 w-10 h-10 bg-warning rounded-full grid place-content-center p-2">
                                    <icon-ethereum />
                                </div>
                                <div class="ltr:ml-2 rtl:mr-2">
                                    <h6 class="text-dark dark:text-white-light">ETH</h6>
                                    <p class="text-white-dark text-xs">Ethereum</p>
                                </div>
                            </div>
                            <div class="mb-5 overflow-hidden">
                                <apexchart height="45" :options="ethereum" :series="ethereumSeries">
                                    <!-- loader -->
                                    <div class="min-h-[45px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                        <span
                                            class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
                                        ></span>
                                    </div>
                                </apexchart>
                            </div>
                            <div class="flex justify-between items-center font-bold text-base">
                                $21,000 <span class="text-danger font-normal text-sm">-1.25%</span>
                            </div>
                        </div>

                        <!-- Litecoin -->
                        <div class="panel">
                            <div class="flex items-center font-semibold mb-5">
                                <div class="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                                    <icon-litecoin />
                                </div>
                                <div class="ltr:ml-2 rtl:mr-2">
                                    <h6 class="text-dark dark:text-white-light">LTC</h6>
                                    <p class="text-white-dark text-xs">Litecoin</p>
                                </div>
                            </div>
                            <div class="mb-5 overflow-hidden">
                                <apexchart height="45" :options="litecoin" :series="litecoinSeries">
                                    <!-- loader -->
                                    <div class="min-h-[45px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                        <span
                                            class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
                                        ></span>
                                    </div>
                                </apexchart>
                            </div>
                            <div class="flex justify-between items-center font-bold text-base">
                                $11,657 <span class="text-success font-normal text-sm">+0.25%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Live Prices -->
                <div>
                    <div class="flex items-center mb-5 font-bold">
                        <span class="text-lg">Live Prices</span>
                        <a href="javascript:;" class="ltr:ml-auto rtl:mr-auto text-primary hover:text-black dark:hover:text-white-dark"> See All </a>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                        <!-- Binance -->
                        <div class="panel">
                            <div class="flex items-center font-semibold mb-5">
                                <div class="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                                    <icon-binance />
                                </div>
                                <div class="ltr:ml-2 rtl:mr-2">
                                    <h6 class="text-dark dark:text-white-light">BNB</h6>
                                    <p class="text-white-dark text-xs">Binance</p>
                                </div>
                            </div>
                            <div class="mb-5 overflow-hidden">
                                <apexchart height="45" :options="binance" :series="binanceSeries">
                                    <!-- loader -->
                                    <div class="min-h-[45px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                        <span
                                            class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
                                        ></span>
                                    </div>
                                </apexchart>
                            </div>
                            <div class="flex justify-between items-center font-bold text-base">
                                $21,000 <span class="text-danger font-normal text-sm">-1.25%</span>
                            </div>
                        </div>

                        <!-- Tether -->
                        <div class="panel">
                            <div class="flex items-center font-semibold mb-5">
                                <div class="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                                    <icon-tether />
                                </div>
                                <div class="ltr:ml-2 rtl:mr-2">
                                    <h6 class="text-dark dark:text-white-light">USDT</h6>
                                    <p class="text-white-dark text-xs">Tether</p>
                                </div>
                            </div>
                            <div class="mb-5 overflow-hidden">
                                <apexchart height="45" :options="tether" :series="tetherSeries">
                                    <!-- loader -->
                                    <div class="min-h-[45px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                        <span
                                            class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
                                        ></span>
                                    </div>
                                </apexchart>
                            </div>
                            <div class="flex justify-between items-center font-bold text-base">
                                $20,000 <span class="text-success font-normal text-sm">+0.25%</span>
                            </div>
                        </div>

                        <!-- Solana -->
                        <div class="panel">
                            <div class="flex items-center font-semibold mb-5">
                                <div class="shrink-0 w-10 h-10 bg-warning rounded-full p-2 grid place-content-center">
                                    <icon-solana />
                                </div>
                                <div class="ltr:ml-2 rtl:mr-2">
                                    <h6 class="text-dark dark:text-white-light">SOL</h6>
                                    <p class="text-white-dark text-xs">Solana</p>
                                </div>
                            </div>
                            <div class="mb-5 overflow-hidden">
                                <apexchart height="45" :options="solana" :series="solanaSeries">
                                    <!-- loader -->
                                    <div class="min-h-[45px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                        <span
                                            class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"
                                        ></span>
                                    </div>
                                </apexchart>
                            </div>
                            <div class="flex justify-between items-center font-bold text-base">
                                $21,000 <span class="text-danger font-normal text-sm">-1.25%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div class="grid gap-6 xl:grid-flow-row">
                    <!-- Previous Statement -->
                    <div class="panel overflow-hidden">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-lg font-bold">Previous Statement</div>
                                <div class="text-success">Paid on June 27, 2022</div>
                            </div>
                            <div class="dropdown">
                                <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                    <button type="button">
                                        <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
                                    </button>
                                    <template #content="{ close }">
                                        <ul @click="close()">
                                            <li>
                                                <a href="javascript:;">View Report</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Edit Report</a>
                                            </li>
                                        </ul>
                                    </template>
                                </Popper>
                            </div>
                        </div>
                        <div class="relative mt-10">
                            <div class="absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24">
                                <icon-circle-check class="text-success opacity-20 w-full h-full" />
                            </div>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div>
                                    <div class="text-primary">Card Limit</div>
                                    <div class="mt-2 font-semibold text-2xl">$50,000.00</div>
                                </div>
                                <div>
                                    <div class="text-primary">Spent</div>
                                    <div class="mt-2 font-semibold text-2xl">$15,000.00</div>
                                </div>
                                <div>
                                    <div class="text-primary">Minimum</div>
                                    <div class="mt-2 font-semibold text-2xl">$2,500.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Current Statement -->
                    <div class="panel overflow-hidden">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-lg font-bold">Current Statement</div>
                                <div class="text-danger">Must be paid before July 27, 2022</div>
                            </div>
                            <div class="dropdown">
                                <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                                    <button type="button">
                                        <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
                                    </button>
                                    <template #content="{ close }">
                                        <ul @click="close()">
                                            <li>
                                                <a href="javascript:;">View Report</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Edit Report</a>
                                            </li>
                                        </ul>
                                    </template>
                                </Popper>
                            </div>
                        </div>
                        <div class="relative mt-10">
                            <div class="absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24">
                                <icon-info-circle class="text-danger opacity-20 w-24 h-full" />
                            </div>

                            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div>
                                    <div class="text-primary">Card Limit</div>
                                    <div class="mt-2 font-semibold text-2xl">$50,000.00</div>
                                </div>
                                <div>
                                    <div class="text-primary">Spent</div>
                                    <div class="mt-2 font-semibold text-2xl">$30,500.00</div>
                                </div>
                                <div>
                                    <div class="text-primary">Minimum</div>
                                    <div class="mt-2 font-semibold text-2xl">$8,000.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Transactions -->
                <div class="panel">
                    <div class="mb-5 text-lg font-bold">Recent Transactions</div>
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th class="ltr:rounded-l-md rtl:rounded-r-md">ID</th>
                                    <th>DATE</th>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th class="text-center ltr:rounded-r-md rtl:rounded-l-md">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="font-semibold">#01</td>
                                    <td class="whitespace-nowrap">Oct 08, 2021</td>
                                    <td class="whitespace-nowrap">Eric Page</td>
                                    <td>$1,358.75</td>
                                    <td class="text-center">
                                        <span class="badge bg-success/20 text-success rounded-full hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#02</td>
                                    <td class="whitespace-nowrap">Dec 18, 2021</td>
                                    <td class="whitespace-nowrap">Nita Parr</td>
                                    <td>-$1,042.82</td>
                                    <td class="text-center">
                                        <span class="badge bg-info/20 text-info rounded-full hover:top-0">In Process</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#03</td>
                                    <td class="whitespace-nowrap">Dec 25, 2021</td>
                                    <td class="whitespace-nowrap">Carl Bell</td>
                                    <td>$1,828.16</td>
                                    <td class="text-center">
                                        <span class="badge bg-danger/20 text-danger rounded-full hover:top-0">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#04</td>
                                    <td class="whitespace-nowrap">Nov 29, 2021</td>
                                    <td class="whitespace-nowrap">Dan Hart</td>
                                    <td>$1,647.55</td>
                                    <td class="text-center">
                                        <span class="badge bg-success/20 text-success rounded-full hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#05</td>
                                    <td class="whitespace-nowrap">Nov 24, 2021</td>
                                    <td class="whitespace-nowrap">Jake Ross</td>
                                    <td>$927.43</td>
                                    <td class="text-center">
                                        <span class="badge bg-success/20 text-success rounded-full hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="font-semibold">#06</td>
                                    <td class="whitespace-nowrap">Jan 26, 2022</td>
                                    <td class="whitespace-nowrap">Anna Bell</td>
                                    <td>$250.00</td>
                                    <td class="text-center">
                                        <span class="badge bg-info/20 text-info rounded-full hover:top-0">In Process</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref, computed } from 'vue';
    import apexchart from 'vue3-apexcharts';
    import { useAppStore } from '@/core/store/index';
    import { useMeta } from '@/core/composables/use-meta';

    import IconHorizontalDots from '@/core/components/icon/icon-horizontal-dots.vue';
    import IconEye from '@/core/components/icon/icon-eye.vue';
    import IconBitcoin from '@/core/components/icon/icon-bitcoin.vue';
    import IconEthereum from '@/core/components/icon/icon-ethereum.vue';
    import IconLitecoin from '@/core/components/icon/icon-litecoin.vue';
    import IconBinance from '@/core/components/icon/icon-binance.vue';
    import IconTether from '@/core/components/icon/icon-tether.vue';
    import IconSolana from '@/core/components/icon/icon-solana.vue';
    import IconCircleCheck from '@/core/components/icon/icon-circle-check.vue';
    import IconInfoCircle from '@/core/components/icon/icon-info-circle.vue';

    useMeta({ title: 'Finance Admin' });
    const store = useAppStore();

    // bitcoin
    const bitcoin = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const bitcoinSeries = ref([
        {
            data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
        },
    ]);

    // ethereum
    const ethereum = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const ethereumSeries = ref([
        {
            data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
        },
    ]);

    // litecoin
    const litecoin = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const litecoinSeries = ref([
        {
            data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
        },
    ]);

    // binance
    const binance = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const binanceSeries = ref([
        {
            data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
        },
    ]);

    // tether
    const tether = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#00ab55'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const tetherSeries = ref([
        {
            data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
        },
    ]);

    // solana
    const solana = computed(() => {
        return {
            chart: {
                height: 45,
                type: 'line',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
            },
            markers: {
                size: 0,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: (val: any) => {
                            return '';
                        },
                    },
                },
            },
            responsive: [
                {
                    breakPoint: 576,
                    options: {
                        chart: {
                            height: 95,
                        },
                        grid: {
                            padding: {
                                top: 45,
                                bottom: 0,
                                left: 0,
                            },
                        },
                    },
                },
            ],
        };
    });

    const solanaSeries = ref([
        {
            data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
        },
    ]);
</script>

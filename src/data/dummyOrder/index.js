import { Product1, Product2, Product3, Product4 } from '../../assets';

export const dummyOrder = [
    {
        id: 1,
        orderDate: 'Sabtu, 23 Desember 2023',
        status: 'cart',
        totalPrice: 32000,
        weight: 1,
        orders: [
            {
                id: 1,
                product: {
                    id: 1,
                    name: 'product 1',
                    image: Product1,
                    category: {
                        id: 1,
                        name: 'kakao'
                    },
                    price: 10000,
                    weight: ['1', '2', '3', '4', '5'],
                    rating: 4.5,
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    ready: true
                },
                qty: 1,
                totalPrice: 10000
            },
            {
                id: 2,
                product: {
                    id: 2,
                    name: 'product 2',
                    image: Product2,
                    category: {
                        id: 2,
                        name: 'jamur'
                    },
                    price: 11000,
                    weight: ['1', '2', '3', '4', '5'],
                    rating: 4.5,
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    ready: true
                },
                qty: 2,
                totalPrice: 22000
            }
        ]
    },
    {
        id: 2,
        orderDate: 'Jumat, 22 Desember 2023',
        status: 'paid',
        totalPrice: 500000,
        weight: 1,
        orders: [
            {
                id: 1,
                product: {
                    id: 3,
                    name: 'product 3',
                    image: Product3,
                    category: {
                        id: 3,
                        name: 'gula'
                    },
                    price: 15000,
                    weight: ['1', '2', '3', '4', '5'],
                    rating: 4.5,
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    ready: true
                },
                qty: 1,
                totalPrice: 15000
            },
            {
                id: 2,
                product: {
                    id: 4,
                    name: 'product 4',
                    image: Product4,
                    category: {
                        id: 4,
                        name: 'kopi'
                    },
                    price: 12000,
                    weight: ['1', '2', '3', '4', '5'],
                    rating: 4.5,
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    ready: true
                },
                qty: 1,
                totalPrice: 12000
            }
        ]
    },
    // {
    //     id: 2,
    //     tanggalPemesanan: 'Sabtu, 19 September 2020',
    //     status: 'lunas',
    //     totalHarga: 375000,
    //     berat: 0.75,
    //     pesanans: [
    //         {
    //             id: 1,
    //             product: {
    //                 id: 5,
    //                 nama: 'LIVERPOOL AWAY 2018-2019',
    //                 gambar: [LiverpoolDepan, LiverpoolBelakang],
    //                 liga: {
    //                     id: 2,
    //                     nama: 'Premier League',
    //                     gambar: PremierLeague,
    //                 },
    //                 harga: 125000,
    //                 berat: 0.25,
    //                 jenis: 'Replika Top Quality',
    //                 ukuran: ["S", "M", "L", "XL", "XXL"],
    //                 ready: true
    //             },
    //             jumlahPesan: 1,
    //             totalHarga: 125000,
    //             keterangan: "Nama Jersey : Eko Nomor Punggung : 9.",
    //             ukuran: "L"
    //         },
    //         {
    //             id: 2,
    //             product: {
    //                 id: 7,
    //                 nama: 'AC MILAN HOME 2018 2019',
    //                 gambar: [MilanDepan, MilanBelakang],
    //                 liga: {
    //                     id: 3,
    //                     nama: 'Serie A',
    //                     gambar: SerieA,
    //                 },
    //                 harga: 125000,
    //                 berat: 0.25,
    //                 jenis: 'Replika Top Quality',
    //                 ukuran: ["S", "M", "L", "XL", "XXL"],
    //                 ready: true
    //             },
    //             jumlahPesan: 2,
    //             totalHarga: 255000,
    //             keterangan: "Nama Jersey : Afif Nomor Punggung : 10.",
    //             ukuran: "M"
    //         }
    //     ]
    // }
];

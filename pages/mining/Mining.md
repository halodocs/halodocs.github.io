# Mining

Dana hasil **mining** dialokasikan sebagai *crowdfunding* untuk mendanai kebutuhan server.

## MBC Tutorial

1. Unduh dan instal **Wonpay** dari [App Store](https://apps.apple.com/ae/app/wonpay/id6554001420) atau [Play Store](https://play.google.com/store/apps/detail?id=com.wonpaywallet).
2. Buat PIN enam digit untuk keamanan.
3. Buat dompet baru (*Create New Wallet*).
4. Pilih dompet **MicroBitcoin (MBC)**.
5. Setujui *Terms of Service* dan *Privacy Policy*.
6. Masukkan nama dompet atau langsung klik **Continue**.
7. Konfirmasi pembuatan dompet.
8. Pilih **Deposit**.
9. Salin alamat dompet MBC dan simpan dengan aman.

## RVN Tutorial

1. Unduh dan instal **Trust Wallet** dari App Store atau Play Store.
2. Buat dompet baru (*Create New Wallet*).
3. Tetapkan PIN enam digit untuk keamanan.
4. Pilih apakah ingin melacak harga aset kripto dan menerima pembaruan transaksi. Pilih **Enable** untuk mengaktifkan, atau **Skip** untuk melewati.
5. Pilih *Create Secret Phrase*.
6. Pilih **Receive**, lalu cari **Ravencoin (RVN**).
7. Salin alamat dompet **RVN** dan simpan dengan aman.

---

## Panduan Instalasi dan Penggunaan **cpuminer-opt** untuk Mining

1. Kunjungi [GitHub JayDDee](https://github.com/JayDDee/cpuminer-opt/releases) dan unduh **cpuminer-opt** dalam format ZIP.
2. Ekstrak file ZIP yang telah diunduh.
3. Buat file **run.txt** dan masukkan salah satu kode berikut sesuai dengan koin yang ingin ditambang:
    - **Mining MicroBitcoin (MBC):**
        
        ```bash
        cpuminer-avx -a power2b -o stratum+tcp://power2b.sea.mine.zpool.ca:6242 -u MBCWALLET -p ID=NAMA, c=MBC, zap=MBC
        ```
        
    - **Mining Ravencoin (RVN):**
        
        ```bash
        cpuminer-avx --algo yespower --param-n 2048 --param-r 32 --param-key "Satoshi Nakamoto 31/Oct/2008 Proof-of-work is essentially one-CPU-one-vote" -o stratum+tcp://yespowerSUGAR.sea.mine.zpool.ca:6241 -u RVNWALLET -p c=RVN
        ```
        
4. Simpan file sebagai **run.bat**.
5. Jalankan **run.bat** dengan mengklik dua kali file tersebut.
6. Mining akan berjalan. Untuk menghentikannya, tekan **`Ctrl + C`** pada terminal yang sedang berjalan.

---

- Monitor proses mining di [pool](https://zpool.ca/wallet/)

[zpool - the miners multipool](https://zpool.ca/wallet)

- Cek jurnal transaksi di [explorer](https://microbitcoinorg.github.io/explorer/)

[https://microbitcoinorg.github.io/explorer/](https://microbitcoinorg.github.io/explorer/)

> Tambahkan `/walletaddress` Anda di masing-masing url. contoh `https://zpool.ca/wallet/**BXheTnryBeec7Ere3zsuRmWjB1LiyCFpec**`
>
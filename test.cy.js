
describe('Akses Tambah Transaksi Penjualan Jubelio', () => {
  it('Login dan navigasi ke Transaksi Penjualan', () => {
    // 1. Kunjungi halaman login
    cy.visit('https://v2.jubelio.com/auth/login')

    // 2. Login
    cy.get('input[name="email"]').type('fitrianggrainir05@gmail.com')
    cy.get('input[name="password"]').type('Reskin01!')
    cy.get('button[type="submit"]').click()

    // 3. Tunggu halaman dashboard/beranda terbuka
    cy.url().should('include', '/shared/integration')
    cy.wait(2000) // tunggu render

    // 4. Klik ikon garis 3 (menu drawer)
    cy.get('button').find('svg').first().click({ force: true })

    // 5. Klik menu "Penjualan"
    cy.contains('a', 'Penjualan').click({ force: true })

    // 6. Klik submenu "Transaksi Penjualan"
    cy.contains('a', 'Transaksi Penjualan').click({ force: true })

    // 7. Verifikasi sudah masuk halaman Transaksi Penjualan
    cy.url().should('include', '/sales/transactions/orders')

    // 8. Klik tombol "Tambah Baru"
    cy.contains('button', 'Tambah Baru').click({ force: true })

    // 9. Verifikasi halaman tambah pesanan muncul
    cy.url().should('include', '/sales/transactions/orders/create')

// Pilih pelanggan "Akulaku"
cy.get('input[placeholder="Pilih pelanggan"]').click()
cy.get('input[placeholder="Pilih Kategori"]').type('Akulaku')
cy.contains('li', 'Akulaku').click()

// Isi No Referensi
cy.get('input[placeholder="No.ref"]').type('111111')

// Pilih sumber "Internal"
cy.get('input[placeholder="Pilih sumber"]').click()
cy.get('input[placeholder="Pilih sumber"]').type('INTERNAL')
cy.contains('li', 'INTERNAL').click()

// Pilih "Toko Default"
cy.get('input[placeholder="Pilih Toko"]').click()
cy.get('input[placeholder="Pilih Toko"]').type('Toko Default')
cy.contains('li', 'Toko Default').click()

// Pilih lokasi "Pusat"
cy.get('input[placeholder="Pilih lokasi"]').click()
    cy.get('input[placeholder="Pilih lokasi"]').type('Pusat')
    cy.contains('li', 'Pusat').click()

// Isi Keterangan
    cy.get('input[placeholder="Masukkan keterangan"]').type('Pesanan baru')

    // Isi rincian ongkos kirim dan biaya lain-lain
    cy.get('input[name="add_disc"]').should('be.visible').clear().type('50000')
    cy.get('input[name="shipping_cost"]').should('be.visible').clear().type('20000')
    cy.get('input[name="shipping_cost_discount"]').should('be.visible').clear().type('10000')
    cy.get('input[name="add_fee"]').should('be.visible').clear().type('10000')
    cy.get('input[name="service_fee"]').should('be.visible').clear().type('5000')
    cy.get('input[name="Insurance_cost"]').should('be.visible').clear().type('15000')
    cy.get('input[name="order_processing_fee"]').should('be.visible').clear().type('25000')

   // Tambah produk
   cy.contains('button', 'Tambah Baru').should('be.visible').click({ force: true })
    
   // Klik nama penerima "Sasa"
   cy.get('input[placeholder="Masukkan nama penerima"]').type('sasa')

   // Alamat
   cy.contains('span', 'Masukkan Alamat').should('be.visible').click({ force: true })
   cy.get('textarea[placeholder="Cth:  Blok, Unit No, Patokan""]').type('Jl. Raya Testing No. 1')
   cy.get('input[placeholder="Masukkan Negara"]').type('Indonesia')
   cy.get('input[placeholder="Masukkan provinsi/kota/kode pos"]').click()
   cy.get('input[placeholder="Masukkan provinsi/kota/kode pos"]').type('No Options')
   cy.contains('li', 'No Options').click() // privinsi kota kode pos belum da di dropdown list 

   // No telepon
   cy.get('input[placeholder="Masukan nomor telepon"]').type('08123456789')

  // Pengiriman - No Resi
    cy.get('input[placeholder="Masukkan no resi"]').type('0101010')

    // Total berat barang
    cy.get('input[placeholder="Total Berat Barang"]').clear().type('2')


    // Pilih kurir: Anteraja Economy
    cy.get('input[placeholder="Pilih kurir"]').click()
    cy.get('input[placeholder="Pilih kurir"]').type('Anteraja Economy')
    cy.contains('li', 'Anteraja Economy').click()

    cy.get('input[placeholder="Pilih lokasi"]').click()
    cy.get('input[placeholder="Pilih lokasi"]').type('Pusat')
    cy.contains('li', 'Pusat').click()

    // Klik tombol Simpan
    cy.contains('Simpan').click()

    // Verifikasi pesan sukses
    cy.contains('Pesanan berhasil disimpan').should('exist')
  })
})


import React from 'react'
import Link from 'gatsby-link'

const Pricing = () => (
  <section id="collaboration" class="collaboration-pricing">
    <div class="container">
      <h2 class="heading">Chcesz promować swoją firmę?</h2>
      <div class="divider" />
      <p class="general-info">
        W grupie można osiągnąć więcej. Zapoznaj się z ofertą skierowaną do firm
        zajmujących się developmentem dla web oraz mobile.
      </p>
      <div class="collaboration-plans">
        <div class="benefits">
          <p class="heading" style="height: 104px;">
            Co dostajesz?
          </p>
          <ul class="benefits-list">
            <li style="height: 14px;">Logo na stronie</li>
            <li style="height: 18px;">Dostęp do grupy AKAI Praca</li>
            <li style="height: 28px;">
              Możliwość wystawienia materiałów promocyjnych na eventach (rollup,
              ulotki)
            </li>
            <li style="height: 18px;">Logo na grafikach eventów</li>
            <li style="height: 18px;">Logo na stronie promującej event</li>
            <li style="height: 28px;">
              Udostępnianie postów z wydarzeniami i ofertami pracy na Fanpage FB
            </li>
          </ul>
        </div>

        <div class="plan">
          <div class="heading" style="height: 104px;">
            <p class="name">Bronze</p>
            <span class="price">200 zł</span>
            <span class="period">/ semestr</span>
            <div class="divider collaboration-bronze" />
          </div>
          <ul class="plan-list">
            <li style="height: 14px;">
              <span class="available-benefit">Logo w sekcji brązowej</span>
            </li>
            <li style="height: 18px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Dostęp do grupy AKAI Praca
              </span>
            </li>
            <li style="height: 28px;">
              <span class="cross">✕</span>
              <span class="mobile-benefit unavailable-benefit">
                Możliwość wystawienia materiałów promocyjnych na eventach
                (rollup, ulotki)
              </span>
            </li>
            <li style="height: 18px;">
              <span class="cross">✕</span>
              <span class="mobile-benefit unavailable-benefit">
                Logo na grafikach eventów
              </span>
            </li>
            <li style="height: 18px;">
              <span class="cross">✕</span>
              <span class="mobile-benefit unavailable-benefit">
                Logo na stronie promującej event
              </span>
            </li>
            <li style="height: 28px;">
              <span class="cross">✕</span>
              <span class="mobile-benefit unavailable-benefit">
                Udostępnianie postów z wydarzeniami i ofertami pracy na Fanpage
                FB
              </span>
            </li>
          </ul>
        </div>

        <div class="plan">
          <div class="heading" style="height: 104px;">
            <p class="name">Silver</p>
            <span class="price">500 zł</span>
            <span class="period">/ semestr</span>
            <div class="divider collaboration-silver" />
          </div>
          <ul class="plan-list">
            <li style="height: 14px;">
              <span class="available-benefit">Logo w sekcji srebrnej</span>
            </li>
            <li style="height: 18px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Dostęp do grupy AKAI Praca
              </span>
            </li>
            <li style="height: 28px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Możliwość wystawienia materiałów promocyjnych na eventach
                (rollup, ulotki)
              </span>
            </li>
            <li style="height: 18px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Logo na grafikach eventów
              </span>
            </li>
            <li style="height: 18px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Logo na stronie promującej event
              </span>
            </li>
            <li style="height: 28px;">
              <span class="cross">✕</span>
              <span class="mobile-benefit unavailable-benefit">
                Udostępnianie postów z wydarzeniami i ofertami pracy na Fanpage
                FB
              </span>
            </li>
          </ul>
        </div>

        <div class="plan">
          <div class="heading" style="height: 104px;">
            <p class="name">Gold</p>
            <span class="price">1000 zł</span>
            <span class="period">/ semestr</span>
            <div class="divider collaboration-gold" />
          </div>
          <ul class="plan-list">
            <li style="height: 14px;">
              <span class="available-benefit">Logo w sekcji złotej</span>
            </li>
            <li style="height: 18px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Dostęp do grupy AKAI Praca
              </span>
            </li>
            <li style="height: 28px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Możliwość wystawienia materiałów promocyjnych na eventach
                (rollup, ulotki)
              </span>
            </li>
            <li style="height: 18px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Logo na grafikach eventów
              </span>
            </li>
            <li style="height: 18px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Logo na stronie promującej event
              </span>
            </li>
            <li style="height: 28px;">
              <span class="tick">✓</span>
              <span class="mobile-benefit available-benefit">
                Udostępnianie postów z wydarzeniami i ofertami pracy na Fanpage
                FB
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p class="additional">
        <span class="title">Nota</span>: Możesz także skorzystać z bezpłatnego
        pakietu Copper, w którym zapewniamy umieszczenie logo na stronie
        wydarzenia i na Fanpage w postach promujących wydarzenie, w którym
        sponsor bierze udział oraz Wspieranie darmowych niekomercyjnych eventów
        skierowanych do społeczności.
      </p>
      <p class="cta">Wybrałeś pakiet współpracy?</p>
      <a href="#" class="contact-btn">
        Skontaktuj się&nbsp;z nami
      </a>
    </div>
  </section>
)

export default Pricing

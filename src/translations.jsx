import React from 'react';

const rawTranslations = {
  EN: {
    home: 'Home',
    about: 'About us',
    ABOUT: 'ABOUT US',
    careers: 'Careers',
    contacts: 'Contacts',
    CONTACTS: 'CONTACT US',
    welcome: 'Welcome to FLOW COFFEE — come for the coffee, stay for the moment.',
    order: 'order now',
    more: (
      <>
        More than coffee, Flow is about simple moments done right. <br />Feel it yourself
      </>
    ),
    map: 'Sofia Center, Budapeshta Street 26, 1202 Sofia',
    rights: '© 2025 FLOW COFFEE. All rights reserved to Vassilena Markova.',
    hiring: "WE'RE HIRING",
    careerText: (
      <>
        <p style={{ marginBottom: '2rem', fontWeight: '300'}}>
          We're looking for someone to join our team as a <strong>barista</strong>. If <br/>you can see yourself behind our bar, reach out. 
          The position <br/>is shift-based and paid by the hour. <br/>
        </p>

        <p style={{ marginBottom: '3rem', fontWeight: '200' }}>
          We're looking for a responsible, positive person, always <br/> up for a challenge. <br/>
        </p>

        <p style={{ fontStyle: 'italic', fontWeight: '100', transform: 'skew(-5deg, 0deg)', textAlign: 'right', }}>
          No experience? No problem — we'll teach you. <br/>
        </p>
      </>
    ),
    heroText: (
      <>
        <p style={{ marginBottom: '2.3rem' }}>
          At <span style={{ fontWeight: 'bold' }}>Flow Coffee Sofia</span>, we believe that <span style={{ fontWeight: 'bold' }}>great coffee</span> is more than just
          a drink — it's a daily ritual, a pause, a moment to slow down and
          let life flow. Nestled in the <span style={{ fontWeight: 'bold' }}>heart of Sofia</span>, our space is designed for 
          calm conversations, focused work, and quiet escapes from the city rush.
        </p>

        <p>
          Every bag we roast tells a story — from the lush highlands of
          <span style={{ fontWeight: 'bold' }}> Ethiopia</span> to the rich volcanic soils of
          <span style={{ fontWeight: 'bold' }}> Colombia</span>,
          <span style={{ fontWeight: 'bold' }}> Indonesia</span>, and
          <span style={{ fontWeight: 'bold' }}> El Salvador</span>. We carefully
          <span style={{ fontWeight: 'bold' }}> select</span> single-origin beans from responsible
          farms around the world, each bringing its own unique flavor
          profile, terroir, and character to <span style={{ fontWeight: 'bold' }}>your cup</span>.
        </p>
      </>
    ),
    time: (
      <>
        <p style={{ marginBottom: '2.3rem' }}>
            Monday - Friday <br /> 8am - 7pm
          </p>
          <p>
            Saturday - Sunday <br /> 9am - 7pm
          </p>
      </>
    )
    // Add more translations as needed
  },
  BG: {
    home: 'Начало',
    about: 'За нас',
    ABOUT: 'ЗА НАС',
    careers: 'Кариери',
    contacts: 'Контакти',
    CONTACTS: 'КОНТАКТИ',
    welcome: 'Добре дошли във FLOW COFFEE — елате за кафето, останете за момента.',
    order: 'поръчай сега',
    more: (
      <>
        Повече от кафе – Flow е за онези прости моменти, направени правилно. <br />Усетете го сами
      </>
    ),
    rights: '© 2025 FLOW COFFEE. Всички права запазени на Василена Маркова.',
    map: 'Център София, ул. Будапеща 26, 1202 София',
    hiring: "ТЪРСИМ ПЕРСОНАЛ",
    careerText: (
      <>
        <p style={{ marginBottom: '2rem', fontWeight: '300'}}>
          Търсим някой да се присъедини към нашия екип като <strong>баристa</strong>. Ако <br/>можете да се видите зад нашия бар, свържете се с нас. 
          Позицията <br/>е на смени и се заплаща на час. <br/>
        </p>

        <p style={{ marginBottom: '3rem', fontWeight: '200' }}>
          Търсим отговорен, позитивен човек, винаги <br/> готов за предизвикателство. <br/>
        </p>

        <p style={{ fontStyle: 'italic', fontWeight: '100', transform: 'skew(-5deg, 0deg)', textAlign: 'right', }}>
          Нямате опит? Няма проблем — ще ви научим. <br/>
        </p>
      </>
    ),
    heroText: (
      <>
        <p style={{ marginBottom: '2.3rem' }}>
          Във <span style={{ fontWeight: 'bold' }}>Flow Coffee Sofia</span> вярваме, че <span style={{ fontWeight: 'bold' }}>доброто кафе</span> е нещо повече от просто напитка – то е ежедневен ритуал, пауза, момент отделен за себе си. Разположено в <span style={{ fontWeight: 'bold' }}>сърцето на София</span>, нашето пространство е създадено за спокойни разговори, фокусирана работа или се превръща в тихо убежище от натоварения градски живот.
        </p>

        <p>
          Всяко едно от нашите пресни кафени зърна разказва история – от буйните височини на <span style={{ fontWeight: 'bold' }}>Етиопия</span> до богатите вулканични почви на <span style={{ fontWeight: 'bold' }}>Колумбия</span>, <span style={{ fontWeight: 'bold' }}>Индонезия</span> и <span style={{ fontWeight: 'bold' }}>Ел Салвадор</span>. Внимателно <span style={{ fontWeight: 'bold' }}>подбираме</span> зърна от единични произходи от отговорни ферми по света, всяко от които носи свой собствен вкусов профил, теруар и характер във <span style={{ fontWeight: 'bold' }}>вашата чаша</span>.
        </p>
      </>
    ),
    time: (
      <>
        <p style={{ marginBottom: '2.3rem' }}>
            Понеделник - Петък <br /> 8:00 - 19:00
          </p>
          <p>
            Събота - Неделя <br /> 9:00 - 19:00
          </p>
      </>
    )
    // Add more translations as needed
  }
};

// Helper function to clean translations (optional)
export const cleanTranslations = (translationObj) => {
  const cleaned = {};
  for (const [lang, translations] of Object.entries(translationObj)) {
    cleaned[lang] = {};
    for (const [key, value] of Object.entries(translations)) {
      // Skip JSX elements (they don't need cleaning)
      if (React.isValidElement(value)) {
        cleaned[lang][key] = value;
        continue;
      }
      
      // Only clean string values
      if (typeof value === 'string') {
        // Replace multiple spaces but preserve \n line breaks
        cleaned[lang][key] = value
          .split('\n')
          .map(line => line.trim().replace(/\s+/g, ' '))
          .join('\n');
      } else {
        cleaned[lang][key] = value;
      }
    }
  }
  return cleaned;
};

export const translations = cleanTranslations(rawTranslations);
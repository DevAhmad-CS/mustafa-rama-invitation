import { LOCATION_HREFS } from './siteContent'

export const TRANSLATIONS = {
  ar: {
    dir: 'rtl',
    toggleLabel: 'English',

    hero: {
      eyebrow: 'أنت مدعو لحضور',
      title: 'حفل زفاف',
      groom: 'مصطفى',
      bride: 'راما',
      ampersand: '&',
      line1: 'بكل حب وفرح',
      line2: 'نتشرف بدعوتكم لمشاركتنا يوم زفافنا',
      date: 'الجمعة، 10 يوليو 2026',
      primaryCta: 'تأكيد الحضور',
      secondaryCta: 'إضافة إلى التقويم',
      scrollHint: 'مرر للأسفل لمعرفة التفاصيل',
    },

    countdown: {
      title: 'العد التنازلي للزفاف',
      lunchTitle: 'العد التنازلي لغداء الزفاف',
      labels: { days: 'أيام', hours: 'ساعات', minutes: 'دقائق', seconds: 'ثواني' },
    },

    eventDetails: {
      title: 'تفاصيل الاحتفال',
      cards: [
        {
          id: 'wedding',
          icon: 'heart',
          title: 'حفل الزفاف',
          lines: ['الجمعة 10/7/2026', 'الساعة 5:30 مساءً', 'قاعات مؤتة للمناسبات'],
        },
        {
          id: 'lunch',
          icon: 'calendar',
          title: 'غداء الزفاف',
          lines: ['الخميس 9/7/2026', 'الساعة 1:00 ظهراً', 'منطقة سحاب - الفيصلية'],
        },
      ],
    },

    parents: {
      title: 'بمباركة والدينا الكريمين',
      cards: [
        { id: 'groom-father', label: 'والدي الحبيب', name: 'السيد محمد محمود موسى جرادات' },
        { id: 'bride-father', label: 'والد العروس', name: 'السيد طالب عبدالله صالح البلوي' },
      ],
    },

    location: {
      title: 'موقع الاحتفال',
      openLabel: 'فتح الموقع',
      cards: [
        {
          id: 'wedding-location',
          title: 'موقع حفل الزفاف',
          subtitle: 'قاعات مؤتة للمناسبات',
          href: LOCATION_HREFS.wedding,
        },
        {
          id: 'lunch-location',
          title: 'موقع غداء الزفاف',
          subtitle: 'منطقة سحاب - الفيصلية',
          href: LOCATION_HREFS.lunch,
        },
      ],
    },

    rsvp: {
      title: 'تأكيد الحضور',
      name: 'الاسم',
      namePlaceholder: 'اكتب اسمك الكامل',
      guests: 'عدد الحضور',
      attending: 'هل ستحضر؟',
      attendingYes: 'نعم',
      attendingNo: 'لا',
      notes: 'ملاحظات اختيارية',
      notesPlaceholder: 'أي ملاحظات تودون إضافتها...',
      submit: 'تأكيد الحضور',
      sending: 'جارٍ الإرسال...',
      success: 'شكراً لك {name}، يسعد {groom} و {bride} حضورك ومشاركتك فرحة هذا اليوم المميز',
      fieldLabels: { name: 'الاسم', guests: 'عدد الحضور', attending: 'الحضور', notes: 'ملاحظات' },
    },

    closing: {
      line1: 'حضوركم شرف لنا وسرور لا يُنسى',
      line2: 'ونعتز بمشاركتكم فرحتنا',
      signature: 'مصطفى محمود موسى جرادات',
    },
  },

  en: {
    dir: 'ltr',
    toggleLabel: 'العربية',

    hero: {
      eyebrow: 'You are invited to',
      title: 'Our Wedding',
      groom: 'Mustafa',
      bride: 'Rama',
      ampersand: '&',
      line1: 'With love and joy',
      line2: 'We would be honored to have you celebrate our wedding day with us',
      date: 'Friday, July 10, 2026',
      primaryCta: 'Confirm Attendance',
      secondaryCta: 'Add to Calendar',
      scrollHint: 'Scroll down for details',
    },

    countdown: {
      title: 'Countdown to the Wedding',
      lunchTitle: 'Countdown to the Lunch',
      labels: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
    },

    eventDetails: {
      title: 'Celebration Details',
      cards: [
        {
          id: 'wedding',
          icon: 'heart',
          title: 'Wedding Ceremony',
          lines: ['Friday 10/7/2026', '5:30 PM', 'Mutah Halls for Events'],
        },
        {
          id: 'lunch',
          icon: 'calendar',
          title: 'Wedding Lunch',
          lines: ['Thursday 9/7/2026', '1:00 PM', 'Sahab Area - Al-Faisaliyah'],
        },
      ],
    },

    parents: {
      title: 'With the Blessing of Our Dear Fathers',
      cards: [
        { id: 'groom-father', label: 'My Beloved Father', name: 'Mr. Mohammad Mahmoud Mousa Jaradat' },
        { id: 'bride-father', label: "The Bride's Father", name: 'Mr. Taleb Abdullah Saleh Al-Balawi' },
      ],
    },

    location: {
      title: 'Celebration Location',
      openLabel: 'Open Location',
      cards: [
        {
          id: 'wedding-location',
          title: 'Wedding Ceremony Location',
          subtitle: 'Mutah Halls for Events',
          href: LOCATION_HREFS.wedding,
        },
        {
          id: 'lunch-location',
          title: 'Wedding Lunch Location',
          subtitle: 'Sahab Area - Al-Faisaliyah',
          href: LOCATION_HREFS.lunch,
        },
      ],
    },

    rsvp: {
      title: 'Confirm Attendance',
      name: 'Name',
      namePlaceholder: 'Enter your full name',
      guests: 'Number of Guests',
      attending: 'Will you attend?',
      attendingYes: 'Yes',
      attendingNo: 'No',
      notes: 'Notes (optional)',
      notesPlaceholder: 'Any notes you would like to add...',
      submit: 'Confirm Attendance',
      sending: 'Sending...',
      success: 'Thank you, {name} — {groom} and {bride} are delighted to have you share in their special day',
      fieldLabels: { name: 'Name', guests: 'Number of Guests', attending: 'Attending', notes: 'Notes' },
    },

    closing: {
      line1: 'Your presence is an honor and an unforgettable joy to us',
      line2: 'and we cherish you sharing in our happiness',
      signature: 'Mustafa Mahmoud Mousa Jaradat',
    },
  },
}

export interface TreatmentData {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  benefits: string[];
  procedure: {
    title: string;
    steps: string[];
  };
  suitable: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const treatmentsData: Record<string, TreatmentData> = {
  'dental-implants': {
    slug: 'dental-implants',
    title: 'Dental Implants',
    subtitle: 'Permanent Tooth Replacement',
    overview:
      'Dental implants are the most reliable and permanent solution for missing teeth. They look, feel, and function like natural teeth, restoring your ability to eat, speak, and smile with confidence. At Dr. Vakharia Dental Clinic, we specialize in advanced implantology, using modern techniques and international-quality materials to ensure lasting results.',
    benefits: [
      'Expert Implant Specialists in Ahmedabad',
      'Digital Planning & Guided Surgery',
      'High Success Rate Above 95%',
      'Affordable Treatment Packages',
      'Permanent & Long-Lasting Solution',
      'Natural Look & Comfortable Fit',
    ],
    procedure: {
      title: 'About Dental Implants',
      steps: [
        'We use digital X-rays, 3D CBCT scans, and intraoral imaging for precise implant placement. This ensures painless procedures, faster recovery, and long-term success rates above 95%.',
        'Our clinic focuses on painless dentistry for anxious patients. With flexible scheduling and experienced implantologists, your treatment is stress-free and efficient.',
        'Each implant is carefully placed to integrate with your jawbone, providing a stable foundation that mimics your natural tooth root. The result is a restoration that functions and feels just like your original teeth.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'How Long Do Dental Implants Last?',
        answer:
          'With proper care, implants can last 15-20 years or more, making them a long-term solution. Regular dental check-ups and good oral hygiene are essential for longevity.',
      },
      {
        question: 'Is Implant Surgery Painful?',
        answer:
          'No, the procedure is performed under local anesthesia, making it virtually painless. Most patients report minimal discomfort during recovery, which can be managed with prescribed medication.',
      },
      {
        question: 'Who Is Eligible For Implants?',
        answer:
          'Most adults with missing teeth are eligible for implants. You need adequate bone density and healthy gums. We perform a comprehensive evaluation including 3D CBCT scans to determine suitability. Even if bone loss is present, bone grafting can make implants possible.',
      },
      {
        question: 'What Is The Recovery Time?',
        answer:
          'Initial healing takes 7-10 days. Complete osseointegration (bone fusion) takes 3-6 months before the final crown is placed. During this period, temporary restorations ensure you can eat and smile normally.',
      },
    ],
  },
  'invisalign': {
    slug: 'invisalign',
    title: 'Invisalign',
    subtitle: 'Clear Aligners',
    overview:
      'Looking for the best Invisalign treatment in Ahmedabad? Dr. Vakharia Dental Clinic offers clear, comfortable, and removable aligners designed to transform teeth without the hassle of traditional braces.',
    benefits: [
      'Experienced Invisalign Providers',
      'Virtually Invisible Aligners',
      'Custom-made Treatment Planning',
      'Comfortable, Removable & Easy To Clean',
      'No Food Restrictions',
      'Predictable & Effective Results',
    ],
    procedure: {
      title: 'Invisalign Clear Aligners in Ahmedabad',
      steps: [
        'Dr. Vakharia Dental Clinic delivers advanced clear aligner treatments with precision, comfort, and proven results tailored to your unique dental needs.',
        'Each aligner set is custom-designed using 3D digital imaging technology to gradually shift your teeth into the desired position with maximum comfort.',
        'Regular progress monitoring ensures your treatment stays on track, with adjustments made as needed to achieve your perfect smile transformation.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'How Long Does Invisalign Treatment Take?',
        answer:
          'Treatment typically takes 12-18 months, depending on your case complexity. Mild cases may be completed in 6-8 months, while more complex cases may take up to 24 months. You\'ll see visible changes within the first few months.',
      },
      {
        question: 'How Often Do I Need To Wear The Aligners?',
        answer:
          'Aligners must be worn 20-22 hours per day for optimal results. You can remove them only for eating, drinking, brushing, and flossing. Consistent wear is crucial for staying on schedule.',
      },
      {
        question: 'Are Invisalign Aligners Really Invisible?',
        answer:
          'Yes! Invisalign aligners are made from clear, medical-grade plastic that is virtually invisible when worn. Most people won\'t notice you\'re wearing them unless they look very closely.',
      },
      {
        question: 'Can Invisalign Fix All Orthodontic Issues?',
        answer:
          'Invisalign can treat most common orthodontic issues including crowding, gaps, overbite, underbite, and crossbite. During your consultation, we\'ll assess if Invisalign is the right solution for your specific case.',
      },
    ],
  },
  'root-canal-treatments': {
    slug: 'root-canal-treatments',
    title: 'Root Canal Treatments',
    subtitle: 'Pain-Free Care',
    overview:
      'A root canal treatment (RCT) is a dental procedure used to save a tooth that is infected or badly decayed. Instead of extracting the tooth, our dentists carefully clean and seal the inside of the tooth to restore its function. At Dr. Vakharia Dental Clinic, we use digital X-rays, rotary instruments, and advanced anesthesia techniques to make the procedure comfortable and effective. Patients often compare it to getting a simple filling — fast, safe, and stress-free.',
    benefits: [
      'Relieves Pain & Infection',
      'Prevents Tooth Extraction',
      'Saves Your Natural Tooth',
      'Long-Lasting And Cost-Effective Solution',
      'Preserves Your Natural Smile',
      'Minimally Invasive Procedure',
    ],
    procedure: {
      title: 'About Root Canal Treatment',
      steps: [
        'Our clinic is equipped with rotary endodontics, apex locators, and digital imaging to ensure accuracy and faster recovery, providing a stress-free experience.',
        'The infected pulp is carefully removed, and the tooth interior is thoroughly cleaned and disinfected to eliminate all bacteria and prevent reinfection.',
        'After cleaning, the root canals are sealed with biocompatible materials, and a crown is placed to protect and strengthen the restored tooth for long-term durability.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'Is Root Canal Treatment Painful?',
        answer:
          'No, with modern anesthesia and rotary tools, RCT is virtually painless. The procedure actually relieves the pain caused by infection. Most patients report the experience is similar to getting a regular filling.',
      },
      {
        question: 'How Many Sittings Does It Take?',
        answer:
          'Most root canal treatments can be completed in 1-2 visits. Simple cases may be done in a single appointment, while complex cases or severe infections may require 2-3 visits to ensure complete healing.',
      },
      {
        question: 'How Long Does A Root Canal Last?',
        answer:
          'A properly treated root canal can last a lifetime with good oral hygiene and regular dental check-ups. Protecting the tooth with a crown significantly improves long-term success rates.',
      },
      {
        question: 'Do I Always Need A Crown After RCT?',
        answer:
          'In most cases, yes. Root canal treatment removes the tooth\'s nerve and blood supply, making it more brittle. A crown protects the tooth from fracturing and restores its strength and function. Front teeth with minimal damage may not always need crowns.',
      },
    ],
  },
  'ceramic-crowns-bridges': {
    slug: 'ceramic-crowns-bridges',
    title: 'Ceramic Crowns & Bridges',
    subtitle: 'Natural Restorations',
    overview:
      'Ceramic crowns and bridges are fixed dental restorations that replace or cover damaged teeth and fill gaps left by missing teeth. Crowns are caps placed on weakened or treated teeth, while bridges are used to replace one or more missing teeth by anchoring to nearby teeth or implants. At Dr. Vakharia Dental Clinic, we use high-quality ceramic and zirconia materials to ensure your restorations look natural, last long, and blend seamlessly with your smile.',
    benefits: [
      'Restore Broken, Worn, Or Treated Teeth',
      'Natural, Tooth-Colored Appearance',
      'Replace Missing Teeth Permanently',
      'Improves Chewing And Speech',
      'Protects Treated Teeth After RCT',
      'Durable & Stain-Resistant Materials',
    ],
    procedure: {
      title: 'About Ceramic Crowns & Bridges',
      steps: [
        'We use digital scanners and CAD/CAM technology to design crowns and bridges with maximum precision. This eliminates messy impressions and reduces waiting time, making the entire process smooth and stress-free.',
        'The affected tooth is carefully prepared and shaped to accommodate the crown, ensuring a perfect fit that feels natural and comfortable in your mouth.',
        'Custom-fabricated restorations are crafted to match the exact shade and shape of your natural teeth, providing seamless aesthetics and optimal functionality.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'How Long Do Ceramic Crowns Last?',
        answer:
          'With proper care, crowns and bridges can last 10-15 years or more. Some patients have crowns that last 20+ years. Regular dental check-ups, good oral hygiene, and avoiding habits like teeth grinding extend their lifespan.',
      },
      {
        question: 'Is The Procedure Painful?',
        answer:
          'No, the procedure is performed under local anesthesia, so you won\'t feel any pain. There may be mild sensitivity for a few days after tooth preparation, which is normal and can be managed with over-the-counter pain medication.',
      },
      {
        question: 'Which Is Better — Ceramic Or Metal Crowns?',
        answer:
          'Ceramic crowns are preferred for visible teeth as they look completely natural and match your tooth color perfectly. Metal crowns are stronger and may be recommended for back molars where chewing forces are greatest. We\'ll recommend the best option based on your specific needs.',
      },
      {
        question: 'Do I Need A Crown After Root Canal Treatment?',
        answer:
          'Yes, in most cases a crown is essential after root canal treatment. The procedure removes the tooth\'s blood supply, making it brittle and prone to fracture. A crown protects and strengthens the tooth, ensuring it lasts for many years.',
      },
    ],
  },
  'wisdom-tooth-surgery': {
    slug: 'wisdom-tooth-surgery',
    title: 'Wisdom Tooth Surgery',
    subtitle: 'Safe & Modern Extraction',
    overview:
      'Wisdom teeth, or third molars, often erupt between ages 17-25 and can cause pain, infection, or crowding. If untreated, they may damage nearby teeth or gums. At Dr. Vakharia Dental Clinic, we perform safe and precise wisdom tooth extractions using digital imaging and advanced surgical techniques for faster healing and minimal discomfort.',
    benefits: [
      'Painless Procedure With Local Anesthesia',
      'Digital X-Ray & 3D Imaging For Accuracy',
      'Faster Recovery With Advanced Techniques',
      'Prevents Infection & Damage To Nearby Teeth',
      'Expert Oral Surgeons For Safe Extractions',
      'Comprehensive Post-Operative Care',
    ],
    procedure: {
      title: 'About Wisdom Tooth Surgery',
      steps: [
        'With modern tools and techniques, our patients experience stress-free extractions and quicker recovery. Post-surgery care ensures long-term oral health.',
        'Before the procedure, we conduct a thorough examination using digital X-rays and 3D imaging to assess the position of the wisdom teeth and plan the safest extraction approach.',
        'The extraction is performed with precision using specialized surgical instruments, and detailed aftercare instructions are provided to promote optimal healing and prevent complications.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'When Should Wisdom Teeth Be Removed?',
        answer:
          'Wisdom teeth should be removed if they cause pain, infection, swelling, or crowding of other teeth. Impacted wisdom teeth that haven\'t fully erupted should also be removed to prevent future complications. Early removal in your late teens or early twenties typically results in easier surgery and faster recovery.',
      },
      {
        question: 'Is Wisdom Tooth Surgery Painful?',
        answer:
          'The procedure itself is painless as it\'s performed under local anesthesia. You may experience some swelling and discomfort for 3-5 days after surgery, which is easily managed with prescribed pain medication and ice packs.',
      },
      {
        question: 'How Long Is The Recovery Period?',
        answer:
          'Most patients recover within 3-7 days. Swelling peaks around day 2-3 and gradually subsides. You can return to normal activities in 2-3 days, though strenuous exercise should be avoided for a week. Complete healing of the extraction site takes 2-3 weeks.',
      },
      {
        question: 'What Should I Eat After Surgery?',
        answer:
          'Stick to soft, cool foods for the first few days: yogurt, smoothies, mashed potatoes, soups, and ice cream. Avoid hot foods, crunchy items, and using straws (suction can dislodge the blood clot). Gradually return to your normal diet as healing progresses.',
      },
    ],
  },
  'gum-surgeries': {
    slug: 'gum-surgeries',
    title: 'Gum Surgeries',
    subtitle: 'Healthy Gums, Healthy Smile',
    overview:
      'Treat bleeding gums, recession, and gum infection with advanced periodontal care at Dr. Vakharia Dental Clinic, Ahmedabad. Safe, precise, and comfortable treatment for lasting results.',
    benefits: [
      'Stops Bleeding, Swelling, And Infection',
      'Treats Gum Recession And Sensitivity',
      'Comfortable Procedures With Quick Recovery',
      'Stabilizes Teeth And Preserves Bone',
      'Improves Breath And Oral Hygiene',
      'Prevents Future Tooth Loss',
    ],
    procedure: {
      title: 'About Gum (Periodontal) Treatment',
      steps: [
        'Gum disease can lead to swollen, bleeding gums, bad breath, bone loss, and loose teeth. Our periodontal treatments range from deep cleaning (scaling & root planing) to flap surgery, bone grafting, and recession coverage—planned to restore gum health and protect your teeth.',
        'We use digital X-rays, ultrasonic scalers, and microsurgical techniques to minimize discomfort, speed healing, and preserve natural tissues wherever possible.',
        'Comprehensive post-treatment care and regular follow-ups ensure your gums remain healthy, preventing disease recurrence and maintaining the long-term stability of your teeth.',
      ],
    },
    suitable: [],
    faqs: [
      {
        question: 'What Are The Signs I Need Gum Treatment?',
        answer:
          'Persistent bleeding, swelling, bad breath, gum recession, loose teeth, or pain while chewing are common warning signs.',
      },
      {
        question: 'Is Gum Surgery Painful?',
        answer:
          'No, the procedure is performed under local anesthesia. Most patients experience minimal discomfort during recovery, which is easily managed with prescribed medication.',
      },
      {
        question: 'How Long Is The Recovery Period?',
        answer:
          'Initial healing takes 1-2 weeks. Most patients return to normal activities within a few days, though complete tissue maturation takes several months.',
      },
      {
        question: 'Will Gum Disease Come Back After Treatment?',
        answer:
          'With proper oral hygiene and regular professional cleanings, gum disease can be controlled. Maintenance visits and good home care are essential for long-term success.',
      },
    ],
  },
  'veneers-smile-designing': {
    slug: 'veneers-smile-designing',
    title: 'Veneers & Smile Designing',
    subtitle: 'Transform Your Smile',
    overview:
      'Porcelain veneers are thin shells custom-made to cover the front surface of teeth, creating a beautiful, natural-looking smile. At Dr. Vakharia Dental Clinic in Ahmedabad, smile design combines multiple cosmetic procedures to achieve your dream smile. Veneers can correct chips, gaps, discoloration, and misalignment.',
    benefits: [
      'Dramatic smile transformation',
      'Natural-looking results',
      'Stain-resistant material',
      'Minimally invasive procedure',
      'Long-lasting durability',
      'Customized to your preferences',
    ],
    procedure: {
      title: 'Veneer Process',
      steps: [
        'Smile design consultation and preview with digital mock-up of your new smile, allowing you to visualize the final results before treatment begins.',
        'Minimal tooth preparation is performed to ensure the veneers fit perfectly while preserving maximum natural tooth structure.',
        'Precise impressions are taken, temporary veneers are placed, and custom porcelain veneers are bonded permanently for a stunning transformation.',
      ],
    },
    suitable: [
      'Discolored or stained teeth',
      'Chipped or worn teeth',
      'Slightly misaligned teeth',
      'Gaps between teeth',
      'Uneven or irregularly shaped teeth',
    ],
    faqs: [
      {
        question: 'How long do veneers last?',
        answer:
          'Porcelain veneers typically last 10-15 years or longer with proper care. They are highly durable and resistant to staining.',
      },
      {
        question: 'Do veneers damage my natural teeth?',
        answer:
          'Minimal tooth preparation is required, removing only a thin layer of enamel. The procedure preserves most of your natural tooth structure.',
      },
      {
        question: 'Can veneers be whitened?',
        answer:
          'Veneers don\'t respond to whitening treatments, but they\'re highly stain-resistant. Choose your desired shade during the design phase.',
      },
    ],
  },
  'teeth-cleaning-polishing': {
    slug: 'teeth-cleaning-polishing',
    title: 'Teeth Cleaning & Polishing',
    subtitle: 'Maintain Optimal Oral Health',
    overview:
      'Professional teeth cleaning removes plaque, tartar, and stains that regular brushing can\'t eliminate. At Dr. Vakharia Dental Clinic in Ahmedabad, regular cleanings are essential for preventing cavities, gum disease, and maintaining a bright smile. We recommend cleanings every six months for most patients.',
    benefits: [
      'Prevents cavities and gum disease',
      'Removes stubborn stains',
      'Freshens breath',
      'Early detection of dental problems',
      'Maintains overall health',
      'Bright, polished smile',
    ],
    procedure: {
      title: 'Cleaning Appointment',
      steps: [
        'Comprehensive oral examination is performed to assess your overall dental health and identify any potential issues requiring attention.',
        'Scaling removes tartar and plaque buildup, followed by deep cleaning between teeth to eliminate bacteria from hard-to-reach areas.',
        'Polishing with specialized paste brightens your teeth, fluoride treatment is applied for added protection, and personalized oral hygiene recommendations are provided.',
      ],
    },
    suitable: [
      'Everyone as preventive care',
      'Patients with good oral health',
      'Those with early gum disease',
      'Maintenance after periodontal treatment',
      'Patients seeking fresh, clean feeling',
    ],
    faqs: [
      {
        question: 'How often should I get my teeth cleaned?',
        answer:
          'Most people should have professional cleanings every six months. Your dentist may recommend more frequent visits if you have gum disease or other concerns.',
      },
      {
        question: 'Does teeth cleaning hurt?',
        answer:
          'Professional cleaning is generally comfortable. If you have sensitive teeth or gum concerns, let us know and we can use additional numbing options.',
      },
      {
        question: 'Can cleaning remove all stains?',
        answer:
          'Professional cleaning removes surface stains from food, drinks, and tobacco. Deep stains may require additional whitening treatments.',
      },
    ],
  },
  'dental-fillings': {
    slug: 'dental-fillings',
    title: 'Dental Fillings',
    subtitle: 'Restore Damaged Teeth',
    overview:
      'Dental fillings repair teeth damaged by decay, restoring their function and appearance. At Dr. Vakharia Dental Clinic in Ahmedabad, we use tooth-colored composite materials that blend naturally with your teeth. Modern fillings are durable, safe, and virtually invisible.',
    benefits: [
      'Natural tooth-colored appearance',
      'Stops decay progression',
      'Restores tooth function',
      'Mercury-free materials',
      'Preserves tooth structure',
      'Strengthens weakened teeth',
    ],
    procedure: {
      title: 'Filling Procedure',
      steps: [
        'Local anesthesia is administered for your comfort, followed by careful removal of decay to prepare the tooth for restoration.',
        'The cavity is thoroughly cleaned and prepared, then composite resin is applied in layers and cured with a special light for optimal bonding.',
        'The filling is shaped and polished to match your natural tooth contours, ensuring a comfortable bite and seamless appearance.',
      ],
    },
    suitable: [
      'Cavities and tooth decay',
      'Cracked or chipped teeth',
      'Worn tooth surfaces',
      'Replacement of old fillings',
      'Small cosmetic improvements',
    ],
    faqs: [
      {
        question: 'How long do fillings last?',
        answer:
          'Composite fillings typically last 5-10 years or longer with proper care. Lifespan depends on size, location, and oral hygiene habits.',
      },
      {
        question: 'Are white fillings as strong as silver fillings?',
        answer:
          'Modern composite materials are very strong and suitable for most cavities. They also bond directly to tooth structure for added strength.',
      },
      {
        question: 'Will the filling be noticeable?',
        answer:
          'No, tooth-colored fillings are carefully matched to your natural tooth shade and blend seamlessly with your smile.',
      },
    ],
  },
  'dentures': {
    slug: 'dentures',
    title: 'Dentures',
    subtitle: 'Replace Multiple Missing Teeth',
    overview:
      'Dentures are removable appliances that replace missing teeth and restore your smile. At Dr. Vakharia Dental Clinic in Ahmedabad, we offer both complete dentures for patients missing all teeth and partial dentures for those with some remaining natural teeth. Modern dentures are comfortable, natural-looking, and improve quality of life.',
    benefits: [
      'Restore eating and speaking ability',
      'Natural appearance',
      'Support facial structure',
      'Affordable tooth replacement',
      'Removable for easy cleaning',
      'Custom-fitted for comfort',
    ],
    procedure: {
      title: 'Denture Process',
      steps: [
        'Comprehensive oral examination is conducted, followed by precise impressions and measurements to ensure optimal fit and function.',
        'Bite registration and shade selection are performed, and a try-in appointment allows you to preview the fit and appearance before final fabrication.',
        'The final dentures are delivered with careful adjustments to ensure maximum comfort, and follow-up appointments address any fine-tuning needed.',
      ],
    },
    suitable: [
      'Multiple missing teeth',
      'Complete tooth loss',
      'Patients seeking removable option',
      'Not candidates for implants',
      'Budget-conscious patients',
    ],
    faqs: [
      {
        question: 'How long does it take to get used to dentures?',
        answer:
          'Most people adjust within a few weeks. Eating and speaking may feel different initially, but becomes natural with practice.',
      },
      {
        question: 'Do I need to take my dentures out at night?',
        answer:
          'Yes, it\'s recommended to remove dentures at night to allow your gums to rest and to clean your dentures thoroughly.',
      },
      {
        question: 'How long do dentures last?',
        answer:
          'Dentures typically last 5-7 years before needing replacement. Regular check-ups ensure proper fit as your mouth changes over time.',
      },
    ],
  },
  'night-guard': {
    slug: 'night-guard',
    title: 'Night Guard',
    subtitle: 'Protect Your Teeth from Grinding',
    overview:
      'A custom night guard is a protective appliance worn during sleep to prevent damage from teeth grinding (bruxism) or clenching. At Dr. Vakharia Dental Clinic in Ahmedabad, our custom-fitted guards are comfortable, durable, and provide optimal protection for your teeth and jaw.',
    benefits: [
      'Prevents tooth wear and damage',
      'Reduces jaw pain and headaches',
      'Custom-fitted for comfort',
      'Protects dental work',
      'Improves sleep quality',
      'Durable and long-lasting',
    ],
    procedure: {
      title: 'Night Guard Process',
      steps: [
        'A thorough evaluation of your grinding or clenching habits is performed, and precise impressions of your teeth are taken for custom fabrication.',
        'Your custom guard is expertly fabricated to fit your mouth perfectly, ensuring maximum comfort and protection during sleep.',
        'A fitting appointment includes adjustments for optimal comfort, detailed care instructions, and a follow-up to ensure complete satisfaction.',
      ],
    },
    suitable: [
      'Teeth grinding or clenching',
      'Morning jaw pain or headaches',
      'Worn or chipped teeth',
      'TMJ disorder symptoms',
      'Protection of crowns or veneers',
    ],
    faqs: [
      {
        question: 'How is a custom night guard different from store-bought?',
        answer:
          'Custom guards are made from precise impressions of your teeth, ensuring perfect fit, comfort, and protection. They\'re also more durable and effective.',
      },
      {
        question: 'How long does a night guard last?',
        answer:
          'With proper care, a custom night guard typically lasts 5+ years. Severe grinders may need replacement sooner.',
      },
      {
        question: 'Will I be able to sleep comfortably with it?',
        answer:
          'Yes! Custom guards are thin, comfortable, and most patients adjust within a few nights. They shouldn\'t interfere with sleep.',
      },
    ],
  },
};

// Each condition can be a string (both genders) or { name, gender } for gender-specific
export const injuryData = {
  // ── MUSCULOSKELETAL ──
  head: {
    id: 'head',
    label: 'Head & Skull',
    system: 'Musculoskeletal',
    conditions: [
      'Traumatic Brain Injury (TBI)',
      'Migraine Headaches',
      'Skull Fracture Residuals',
      'Hearing Loss (Central)',
      'Memory Loss',
    ],
  },
  neck: {
    id: 'neck',
    label: 'Neck & Cervical Spine',
    system: 'Musculoskeletal',
    conditions: [
      'Cervical Strain',
      'Cervical Radiculopathy',
      'Degenerative Disc Disease (Cervical)',
      'Cervical Stenosis',
      'Intervertebral Disc Syndrome (IVDS)',
    ],
  },
  shoulderLeft: {
    id: 'shoulderLeft',
    label: 'Left Shoulder',
    system: 'Musculoskeletal',
    conditions: [
      'Rotator Cuff Tear',
      'Shoulder Impingement Syndrome',
      'AC Joint Separation',
      'Shoulder Instability/Dislocation',
      'Frozen Shoulder (Adhesive Capsulitis)',
    ],
  },
  shoulderRight: {
    id: 'shoulderRight',
    label: 'Right Shoulder',
    system: 'Musculoskeletal',
    conditions: [
      'Rotator Cuff Tear',
      'Shoulder Impingement Syndrome',
      'AC Joint Separation',
      'Shoulder Instability/Dislocation',
      'Frozen Shoulder (Adhesive Capsulitis)',
    ],
  },
  upperArmLeft: {
    id: 'upperArmLeft',
    label: 'Left Upper Arm & Elbow',
    system: 'Musculoskeletal',
    conditions: [
      'Lateral Epicondylitis (Tennis Elbow)',
      'Medial Epicondylitis',
      'Cubital Tunnel Syndrome',
      'Elbow Fracture Residuals',
      'Ulnar Nerve Entrapment',
    ],
  },
  upperArmRight: {
    id: 'upperArmRight',
    label: 'Right Upper Arm & Elbow',
    system: 'Musculoskeletal',
    conditions: [
      'Lateral Epicondylitis (Tennis Elbow)',
      'Medial Epicondylitis',
      'Cubital Tunnel Syndrome',
      'Elbow Fracture Residuals',
      'Ulnar Nerve Entrapment',
    ],
  },
  forearmLeft: {
    id: 'forearmLeft',
    label: 'Left Forearm, Wrist & Hand',
    system: 'Musculoskeletal',
    conditions: [
      'Carpal Tunnel Syndrome',
      "De Quervain's Tenosynovitis",
      'Wrist Fracture Residuals',
      'Trigger Finger',
      'Peripheral Neuropathy (Upper Extremity)',
    ],
  },
  forearmRight: {
    id: 'forearmRight',
    label: 'Right Forearm, Wrist & Hand',
    system: 'Musculoskeletal',
    conditions: [
      'Carpal Tunnel Syndrome',
      "De Quervain's Tenosynovitis",
      'Wrist Fracture Residuals',
      'Trigger Finger',
      'Peripheral Neuropathy (Upper Extremity)',
    ],
  },
  chest: {
    id: 'chest',
    label: 'Chest & Thoracic Spine',
    system: 'Musculoskeletal',
    conditions: [
      'Thoracic Strain',
      'Costochondritis',
      'Rib Fracture Residuals',
      'Thoracic Radiculopathy',
      'IVDS (Thoracic)',
    ],
  },
  upperBack: {
    id: 'upperBack',
    label: 'Upper Back',
    system: 'Musculoskeletal',
    conditions: [
      'Thoracic Strain',
      'Thoracic Radiculopathy',
      'IVDS (Thoracic)',
      'Degenerative Disc Disease (Thoracic)',
    ],
  },
  lowerBack: {
    id: 'lowerBack',
    label: 'Lower Back & Lumbar Spine',
    system: 'Musculoskeletal',
    conditions: [
      'Lumbar Strain',
      'Lumbar Radiculopathy',
      'Degenerative Disc Disease (Lumbar)',
      'Lumbar Stenosis',
      'IVDS (Lumbar)',
      'Sciatica',
      'Spondylolisthesis',
    ],
  },
  hipLeft: {
    id: 'hipLeft',
    label: 'Left Hip',
    system: 'Musculoskeletal',
    conditions: [
      'Hip Bursitis',
      'Avascular Necrosis (Hip)',
      'Hip Labral Tear',
      'Hip Replacement Residuals',
      'Iliotibial Band Syndrome',
    ],
  },
  hipRight: {
    id: 'hipRight',
    label: 'Right Hip',
    system: 'Musculoskeletal',
    conditions: [
      'Hip Bursitis',
      'Avascular Necrosis (Hip)',
      'Hip Labral Tear',
      'Hip Replacement Residuals',
      'Iliotibial Band Syndrome',
    ],
  },
  kneeLeft: {
    id: 'kneeLeft',
    label: 'Left Knee',
    system: 'Musculoskeletal',
    conditions: [
      'Knee Meniscus Tear',
      'Patellofemoral Syndrome',
      'ACL/PCL Tear Residuals',
      'Knee Replacement Residuals',
      'Chondromalacia Patella',
      'Knee Bursitis',
    ],
  },
  kneeRight: {
    id: 'kneeRight',
    label: 'Right Knee',
    system: 'Musculoskeletal',
    conditions: [
      'Knee Meniscus Tear',
      'Patellofemoral Syndrome',
      'ACL/PCL Tear Residuals',
      'Knee Replacement Residuals',
      'Chondromalacia Patella',
      'Knee Bursitis',
    ],
  },
  shinLeft: {
    id: 'shinLeft',
    label: 'Left Shin & Calf',
    system: 'Musculoskeletal',
    conditions: [
      'Shin Splints (Chronic)',
      'Deep Vein Thrombosis (DVT) Residuals',
      'Peripheral Artery Disease',
      'Compartment Syndrome Residuals',
    ],
  },
  shinRight: {
    id: 'shinRight',
    label: 'Right Shin & Calf',
    system: 'Musculoskeletal',
    conditions: [
      'Shin Splints (Chronic)',
      'Deep Vein Thrombosis (DVT) Residuals',
      'Peripheral Artery Disease',
      'Compartment Syndrome Residuals',
    ],
  },
  ankleLeft: {
    id: 'ankleLeft',
    label: 'Left Ankle & Foot',
    system: 'Musculoskeletal',
    conditions: [
      'Plantar Fasciitis',
      'Achilles Tendon Rupture Residuals',
      'Pes Planus (Flat Feet)',
      'Ankle Instability/Sprain Residuals',
      'Peripheral Neuropathy (Lower Extremity)',
      'Hammer Toe',
      'Gout',
    ],
  },
  ankleRight: {
    id: 'ankleRight',
    label: 'Right Ankle & Foot',
    system: 'Musculoskeletal',
    conditions: [
      'Plantar Fasciitis',
      'Achilles Tendon Rupture Residuals',
      'Pes Planus (Flat Feet)',
      'Ankle Instability/Sprain Residuals',
      'Peripheral Neuropathy (Lower Extremity)',
      'Hammer Toe',
      'Gout',
    ],
  },

  // ── ORGANS OF SPECIAL SENSE (Eyes) ──
  eyeLeft: {
    id: 'eyeLeft',
    label: 'Left Eye',
    system: 'Eyes',
    conditions: [
      'Visual Impairment',
      'Macular Degeneration',
      'Cataracts (radiation-related)',
      'Glaucoma',
      'Optic Neuritis',
      'Loss of Eye',
    ],
  },
  eyeRight: {
    id: 'eyeRight',
    label: 'Right Eye',
    system: 'Eyes',
    conditions: [
      'Visual Impairment',
      'Macular Degeneration',
      'Cataracts (radiation-related)',
      'Glaucoma',
      'Optic Neuritis',
      'Loss of Eye',
    ],
  },

  // ── AUDITORY ──
  earLeft: {
    id: 'earLeft',
    label: 'Left Ear',
    system: 'Auditory',
    conditions: [
      'Tinnitus (Ringing in Ears)',
      'Sensorineural Hearing Loss',
      'Noise-Induced Hearing Loss',
      "Meniere's Disease",
    ],
  },
  earRight: {
    id: 'earRight',
    label: 'Right Ear',
    system: 'Auditory',
    conditions: [
      'Tinnitus (Ringing in Ears)',
      'Sensorineural Hearing Loss',
      'Noise-Induced Hearing Loss',
      "Meniere's Disease",
    ],
  },

  // ── RESPIRATORY ──
  lungLeft: {
    id: 'lungLeft',
    label: 'Left Lung',
    system: 'Respiratory',
    conditions: [
      'Asthma',
      'COPD',
      'Pleuritis',
      'Pulmonary Fibrosis',
      'Obstructive Sleep Apnea',
      'Burn Pit/Toxic Exposure Respiratory Conditions',
      'Mesothelioma',
    ],
  },
  lungRight: {
    id: 'lungRight',
    label: 'Right Lung',
    system: 'Respiratory',
    conditions: [
      'Asthma',
      'COPD',
      'Pleuritis',
      'Pulmonary Fibrosis',
      'Obstructive Sleep Apnea',
      'Burn Pit/Toxic Exposure Respiratory Conditions',
      'Mesothelioma',
    ],
  },

  // ── CARDIOVASCULAR ──
  heart: {
    id: 'heart',
    label: 'Heart',
    system: 'Cardiovascular',
    conditions: [
      'Ischemic Heart Disease',
      'Hypertension',
      'Cardiomyopathy',
      'Arrhythmia',
      'Coronary Artery Disease',
      'Heart Valve Conditions',
    ],
  },

  // ── DIGESTIVE ──
  abdomen: {
    id: 'abdomen',
    label: 'Abdomen / Digestive',
    system: 'Digestive',
    conditions: [
      'GERD (Acid Reflux)',
      'Irritable Bowel Syndrome (IBS)',
      "Crohn's Disease",
      'Peptic Ulcer Disease',
      'Hernia Residuals',
      'Liver Disease (Hepatitis B/C)',
      'Gallbladder Removal Residuals',
    ],
  },

  // ── GENITOURINARY (Male) ──
  genitourinaryMale: {
    id: 'genitourinaryMale',
    label: 'Genitourinary (Male)',
    system: 'Genitourinary',
    gender: 'male',
    conditions: [
      'Prostate Conditions (Benign Prostatic Hyperplasia)',
      'Prostate Cancer Residuals',
      'Erectile Dysfunction',
      'Kidney Disease / Renal Insufficiency',
      'Kidney Stones (Nephrolithiasis)',
      'Urinary Incontinence',
      'Bladder Conditions',
      'Testicular Conditions / Varicocele',
    ],
  },

  // ── GENITOURINARY (Female) ──
  genitourinaryFemale: {
    id: 'genitourinaryFemale',
    label: 'Genitourinary (Female)',
    system: 'Genitourinary',
    gender: 'female',
    conditions: [
      'Kidney Disease / Renal Insufficiency',
      'Kidney Stones (Nephrolithiasis)',
      'Urinary Incontinence',
      'Bladder Conditions',
      'Urinary Tract Infections (Chronic)',
    ],
  },

  // ── GYNECOLOGICAL (Female only) ──
  gynecological: {
    id: 'gynecological',
    label: 'Gynecological',
    system: 'Gynecological',
    gender: 'female',
    conditions: [
      'Endometriosis',
      'Uterine Fibroids',
      'Ovarian Cysts',
      'Polycystic Ovary Syndrome (PCOS)',
      'Cervical/Uterine Cancer Residuals',
      'Infertility (service-connected)',
      'Menstrual Irregularities (service-connected)',
      'Pelvic Inflammatory Disease (PID)',
    ],
  },

  // ── INFECTIOUS DISEASES ──
  infectiousDisease: {
    id: 'infectiousDisease',
    label: 'Infectious Diseases',
    system: 'Infectious Diseases',
    conditions: [
      'Hepatitis B',
      'Hepatitis C',
      'HIV/AIDS (service-connected)',
      'Tuberculosis (Active or Residuals)',
      'Malaria Residuals',
      'Leishmaniasis',
      'Lyme Disease',
      'Parasitic Infections (service-connected)',
    ],
  },

  // ── HEMATOLOGIC / LYMPHATIC ──
  hematologic: {
    id: 'hematologic',
    label: 'Hematologic & Lymphatic',
    system: 'Hematologic / Lymphatic',
    conditions: [
      'Anemia (service-connected)',
      'Sickle Cell Disease',
      'Leukemia',
      'Lymphoma (Hodgkin / Non-Hodgkin)',
      'Spleen Removal Residuals',
      'Blood Clotting Disorders',
      'Immune System Disorders (Lupus, etc.)',
    ],
  },

  // ── ENDOCRINE ──
  endocrine: {
    id: 'endocrine',
    label: 'Endocrine System',
    system: 'Endocrine',
    conditions: [
      'Diabetes Mellitus (Type 1 or Type 2)',
      'Thyroid Conditions (Hypothyroidism / Hyperthyroidism)',
      'Thyroid Cancer Residuals',
      'Adrenal Insufficiency',
      'Cushing\'s Syndrome',
      'Growth Hormone Deficiency',
    ],
  },

  // ── NEUROLOGICAL ──
  neurological: {
    id: 'neurological',
    label: 'Neurological Conditions',
    system: 'Neurological',
    conditions: [
      'Epilepsy / Seizure Disorder',
      'Multiple Sclerosis (MS)',
      'Parkinson\'s Disease',
      'Peripheral Neuropathy (General)',
      'Trigeminal Neuralgia',
      'Cranial Nerve Damage',
      'Narcolepsy',
      'Chronic Fatigue Syndrome',
      'Fibromyalgia',
      'Restless Leg Syndrome',
      'Guillain-Barré Syndrome Residuals',
    ],
  },

  // ── SKIN ──
  skin: {
    id: 'skin',
    label: 'Skin',
    system: 'Skin',
    conditions: [
      'Eczema/Dermatitis (service-connected)',
      'Psoriasis',
      'Acne (Chloracne — chemical exposure)',
      'Burn Scars',
      'Surgical Scars',
      'Skin Cancer (Melanoma/Non-Melanoma)',
      'Rosacea',
      'Folliculitis',
    ],
  },

  // ── MENTAL HEALTH ──
  mentalHealth: {
    id: 'mentalHealth',
    label: 'Mental Health',
    system: 'Mental Disorders',
    conditions: [
      'PTSD',
      'Major Depressive Disorder (MDD)',
      'Generalized Anxiety Disorder (GAD)',
      'Military Sexual Trauma (MST)',
      'Adjustment Disorder',
      'Bipolar Disorder',
      'Somatic Symptom Disorder',
      'Substance Use Disorder (service-connected)',
      'Insomnia/Sleep Disorder',
      'Suicidal Ideation History',
    ],
  },
}

// Regions that appear as clickable SVG zones on the body
export const bodyRegions = [
  'head', 'eyeLeft', 'eyeRight', 'earLeft', 'earRight',
  'neck', 'shoulderLeft', 'shoulderRight', 'upperArmLeft', 'upperArmRight',
  'forearmLeft', 'forearmRight', 'chest', 'lungLeft', 'lungRight', 'heart',
  'abdomen', 'hipLeft', 'hipRight',
  'kneeLeft', 'kneeRight', 'shinLeft', 'shinRight', 'ankleLeft', 'ankleRight',
]

// Regions that appear as buttons below the body map
export const buttonRegions = [
  'upperBack', 'lowerBack', 'mentalHealth', 'skin',
  'neurological', 'endocrine', 'hematologic', 'infectiousDisease',
  'genitourinaryMale', 'genitourinaryFemale', 'gynecological',
]

export const regionOrder = [
  ...bodyRegions,
  ...buttonRegions,
]

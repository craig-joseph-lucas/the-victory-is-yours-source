'use strict';

const tags = [
  {
    name: 'default',
    verses: [
      'John 3:16',
      'Jeremiah 29:11',
      'Phillipians 4:13',
      'Galations 5:22',
      'Proverbs 16:3',
      'John 8:12',
      'Ephesians 2:8',
      'Philippians 4:6',
      'Romans 8:38-39',
      'Matthew 6:33',
      'Romans 8:28'
    ],
  },
  {
    name: 'Jesus',
    verses: [
      'John 3:16',
      'John 15:5',
      'John 6:35',
      'John 8:12',
      'John 10:7',
      'John 10:11-14',
      'John 11:25',
      'John 14:6',
      'John 15:11',
      'John 4:13-14',
      'John 15:13'
    ]
  },
  {
    name: 'Suffering',
    verses: [
      '1 Peter 5:8-9',
      '2 Corinthians 4:8-9',
      'Romans 8:18-21',
      'Matthew 5:4',
      'John 16:20',
      'John 16:33',
      'Romans 15:13',
      'Romans 8:28',
      'Hebrews 13:5'
    ]
  },
  {
    name: 'Prayer',
    verses: [
      'Phillipians 4:6',
      '1 John 1:9',
      'Colossians 4:2',
      'James 5:16',
      'John 15:7',
      '1 John 5:14-15',
      'Ephesians 6:18',
      'James 5:13',
      'Matthew 5:44',
      'Matthew 26:41',
      'Romans 12:12',
      'Luke 11:2-4',
      '1 Thessalonians 5:16-18'
    ]
  },
  {
    name: 'Holy Spirit',
    verses: [
      'Galatians 5:22-23',
      'John 14:26',
      '1 Corinthians 6:19-20',
      'Acts 2:38',
      'Romans 8:26',
      'Romans 15:13',
      'Ephesians 1:13',
      'Titus 3:5'
    ]
  },
  {
    name: 'Grace',
    verses: [
      'Ephesians 2:8-9',
      '2 Corinthians 12:8-9',
      'John 1:14',
      'Romans 5:8',
      'Romans 3:23-24',
      'John 3:16',
      'Colossians 4:2-6',
      'Galatians 2:19-21',
      'Ephesians 1:7'
    ]
  },
  {
    name: 'Spiritual Warfare',
    verses: [
      'James 4:7',
      'Ephesians 6:11',
      '1 Peter 5:8',
      '1 John 5:4-5',
      '1 Peter 5:7',
      'Philippians 4:8'
    ]
  },
  {
    name: 'Salvation',
    verses: [
      'John 3:16',
      'Ephesians 2:8-9',
      '1 John 1:9',
      'Romans 10:9-10',
      'Acts 4:12',
      'Matthew 12:30',
      'John 14:6',
      'Mark 16:6',
      'Romans 3:23',
      'Romans 6:23',
      'Acts 16:31',
      'Romans 1:16',
      'John 3:5',
      'Romans 5:6-8',
      '2 Corinthians 5:17',
      'John 1:12',
      '1 John 5:13',
      'Phillipians 1:6',
      'Revelation 3:20'
    ]
  },
  {
    name: 'Mercy',
    verses: [
      'Hebrews 4:16',
      'Ephesians 2:4-5',
      'Lamentations 3:22-23',
      'Matthew 5:7',
      '1 Peter 1:3',
      'Titus 3:5'
    ],
    hidePopularFilter: true
  },
  {
    name: 'How to love',
    verses: [
      'John 13:34',
      'Romans 12:10',
      'Romans 12:16',
      'Romans 14:19',
      '1 Thessalonians 5:11',
      'Romans 15:5',
      'Romans 15:7',
      'Romans 15:14',
      'Colossians 3:16',
      'Romans 16:16',
      '1 Corinthians 12:25',
      'Galatians 5:13',
      'Galatians 6:2',
      'Ephesians 4:2',
      'Colossians 3:13',
      'Ephesians 4:15',
      'Ephesians 4:32',
      'Ephesians 5:19',
      'Ephesians 5:21',
      '1 Peter 5:5',
      'Philippians 2:3',
      'Philippians 2:4',
      'Colossians 3:13',
      'Colossians 3:16',
      '1 Thessalonians 4:18',
      '1 Thessalonians 5:11',
      'Hebrews 3:13',
      'Hebrews 10:24',
      '1 Peter 4:9',
      '1 Peter 4:10',
      '1 Peter 5:5',
      'James 5:16'
    ],
    hidePopularFilter: true
  },
  {
    name: 'Ten Commandments',
    verses: [
      'Exodus 20:3',
      'Exodus 20:4-6',
      'Exodus 20:7',
      'Exodus 20:8-11',
      'Exodus 20:12',
      'Exodus 20:13',
      'Exodus 20:14',
      'Exodus 20:15',
      'Exodus 20:16',
      'Exodus 20:17'
    ],
    hidePopularFilter: true
  },
  {
    name: 'Worship',
    verses: [
      'John 4:23-24',
      '1 Chronicles 16:29',
      'Psalm 86:9',
      'Psalm 95:6',
      'Luke 4:8',
      'Romans 12:1',
      'Phillipians 3:3'
    ],
    hidePopularFilter: true
  },
  {
    name: 'End Times',
    verses: [
      '1 Thessalonians 4:13-18',
      'Matthew 24:36',
      'Revelation 20:1-15',
      'Matthew 24:44',
      'Matthew 24:1-51'
    ],
    hidePopularFilter: true
  },
  {
    name: 'Death',
    verses: [
      'John 5:24',
      'Romans 6:8',
      'Romans 6:23',
      'Romans 8:38-39',
      'Matthew 5:4',
      '1 Corinthians 15:55-57',
      'Isaiah 41:10',
      'Psalm 23:4',
      '1 Corinthians 15:52',
      '1 Thessalonians 4:13-14',
      'Revelation 21:4'
    ],
    hidePopularFilter: true
  },
  {
    name: 'Sin',
    verses: [
      'Romans 6:6-9',
      'Ephesians 4:22-24',
      'Psalm 25:6-8',
      '1 Corinthians 10:13',
      'Romans 3:23',
      'Romans 6:23',
      'Galatians 5:19-21',
      '1 John 1:8-10'
    ],
    hidePopularFilter: true
  },
  {
    name: 'Heaven',
    verses: [
      'Revelation 21:4',
      'John 3:16',
      '1 Thessalonians 4:16-17',
      'Colossians 3:2',
      'John 14:2',
      'Philippians 3:20',
      'Psalm 19:1-2',
      'Matthew 6:19-20',
      '2 Corinthians 5:1'
    ],
    hidePopularFilter: true
  },
  {
    name: 'Parenting',
    verses: [
      'proverbs 22:6',
      'Ephesians 6:4',
      'Colossians 3:21',
      'Proverbs 13:24',
      'Ephesians 4:29',
      'James 1:17',
      'Proverbs 29:17',
      'Psalm 103:13',
      '1 Timothy 5:8',
      '1 Timothy 3:4',
      'Philippians 4:6',
      '2 Timothy 3:16'
    ],
    hidePopularFilter: true
  },
  {
    name: 'Marriage',
    verses: [
      '1 Corinthians 13:4-7',
      'Ephesians 5:22-24',
      'Ephesians 5:25-33',
      'Proverbs 18:22',
      'Genesis 2:24',
      '1 Peter 3:1-7',
      '1 Peter 3:7',
      'Mark 10:8-12',
      '1 Peter 4:8',
      'Colossians 3:18-19',
      '1 Corinthians 7:12-15',
      'Matthew 19:9',
      'Proverbs 12:4',
      '1 Timothy 3:2-6'
    ],
    hidePopularFilter: true
  },
  {
    name: 'Redemption',
    verses: [
      'Genesis 1:26:27',
      'Romans 5:12',
      'Romans 6:23',
      '1 Corinthians 15:22',
      'Romans 3:23'
    ],
    hidePopularFilter: true
  },
  {
    hidePopularFilter: true,
    name: 'One Anothers',
    verses: [
      'John 13:34',
      'Romans 12:10',
      'Romans 12:16',
      'Romans 14:19',
      '1 Thessalonians 5:11',
      'Romans 15:5',
      'Romans 15:7',
      'Romans 15:14',
      'Colossians 3:16',
      'Romans 16:16',
      '1 Corinthians 12:25',
      'Galatians 5:13',
      'Galatians 6:2',
      'Ephesians 4:2',
      'Colossians 3:13',
      'Ephesians 4:15',
      'Ephesians 4:25',
      'Ephesians 4:32',
      'Ephesians 5:19',
      'Ephesians 5:21',
      '1 Peter 5:5',
      'Phillipians 2:3',
      'Phillipians 2:4',
      '1 Thessalonians 4:18',
      'Hebrews 3:13',
      'Hebrews 10:24',
      '1 Peter 4:9',
      '1 Peter 4:10',
      '1 Peter 5:5',
      'James 5:16'
    ]
  },
  {
    hidePopularFilter: true,
    name: 'Men like us Barnabus',
    verses: [
      'Acts 4:36-37',
      'Acts 9:26-27',
      'Acts 11:21-26',
      'Acts 14:12',
      'Acts 15:36-41'
    ],
    studyName: 'Session 3 - The Encourager',
    docxHeader: 'Barnabus'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us Ananias',
    verses: ['Acts 9:1-19'],
    studyName: 'Session 3 - The Encourager',
    docxHeader: 'Ananias'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us the builder',
    verses: [
      'II Cor. 2:5-7', 'Gal. 6:1', 'Eph. 6:4', 'Col. 2:1-2', 'I Thess. 5:11', 'I Thess. 5:14', 'II Tim. 4:2'
    ],
    studyName: 'Session 3 - The Encourager',
    docxHeader: 'Additional Verses'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us the seven servants',
    verses: [
      'Acts 6:1-7',
      'Luke 22:27'
    ],
    studyName: 'Session 4 - The Helper',
    docxHeader: 'Seven Servants'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us Jason',
    verses: [
      'Acts 17:1-9'
    ],
    studyName: 'Session 4 - The Helper',
    docxHeader: 'Jason'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us John Mark',
    verses: [
      'Acts 12:25', 'Acts 13:5', 'Acts 13', 'Acts 15:36-41', 'Colossians 4:10-11', '2 Timothy 4:11'
    ],
    studyName: 'Session 4 - The Helper',
    docxHeader: 'John Mark'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us the encourager',
    verses: [
      'Prov. 22:9', 'Ecc. 2:4', 'Matt. 23:11', 'Rom. 12:1-8', '1 Cor. 3:13', '1 Cor 12 12:1-31', 'Philippians 2:4'
    ],
    studyName: 'Session 4 - The Helper',
    docxHeader: 'Other verses for the Helper'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us Timothy and Silas',
    verses: [
      'Acts 16:1-5', 'Acts 17:14', '2 Tim. 1:5-7', 'I Cor. 14:7', 'I Thessalonians 1:1', 'II Timothy 3:14-15'
    ],
    studyName: 'Session 5 - The Heir',
    docxHeader: 'Timothy and Silas'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us Ephesian Elders',
    verses: [
      'Acts 20:17-38'
    ],
    studyName: 'Session 5 - The Heir',
    docxHeader: 'Ephesian elders'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us the Heir',
    verses: [
      'Romans 8:15-18', 'Heb. 11:1-12:1', '1 John 2:24', '1 John 1:4-8', 'Rev.21:7'
    ],
    studyName: 'Session 5 - The Heir',
    docxHeader: 'Other Verses for the Heir'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us the Martyr',
    verses: [
      'Hebrews 11:37-38', 'Acts 14:21-22', 'Acts 7:54-60', 'Acts 12:1-5', 'Acts 14:19-23', 'Acts 16:25', '2 Cor. 11:24-33'
    ],
    studyName: 'Session 6 - The Martyr',
    docxHeader: 'STEPHEN, JAMES , PETER, PAUL'
  },
  {
    hidePopularFilter: true,
    name: 'Men like us the Martyr verses',
    verses: [
      'Is. 53:7', 'Ps. 69:26', 'Matt. 5:10-12', 'Jn. 15:20', 'II Cor. 4:7-12', 'Rev. 2:10'
    ],
    studyName: 'Session 6 - The Martyr',
    docxHeader: 'Other verses for the Martyr'
  }
];

module.exports = tags;

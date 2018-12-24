exports.mocks = {
  ID: () => 1,
  Post: () => ({
    title: 'こんにちは',
    content: '今日はクリスマスイブですね',
    posted_at: '2018-12-24T00:00:00Z'
  }),
  Comment: () => ({
    content: 'そうですね',
    posted_at: '2018-12-24T00:00:00Z'
  })
}

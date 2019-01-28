class DeepThought {
  getAlmightyAnswer() {
    return 42;
  }
}

describe('Deep Thought', () => {

  let deepThought;

  beforeEach(() => {
    deepThought = new DeepThought();
  });

  it('should know the answer to life, the universe and everything', () => {
    const answer = deepThought.getAlmightyAnswer();
    expect(answer).toBeGreaterThan(0);
  });
});

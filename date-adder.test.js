const { add } = require('./date-adder');

describe('testing date-adder.js', () => {

  it('returns a new date with 10 days added to the original', () => {
    const orgDate = new Date(2000, 10, 15);
    const diff = '10d';
    const newDate = new Date(2000, 10, 25);
    expect(add(orgDate, diff)).toEqual(newDate);
  });

  it('returns a new date with 33 years added to the original', () => {
    const orgDate = new Date(1960, 2, 14);
    const diff = '33y';
    const newDate = new Date(1993, 2, 14);
    expect(add(orgDate, diff)).toEqual(newDate);
  });

  it('returns a new date with 9 months added to the original', () => {
    const orgDate = new Date(2005, 5, 20);
    const diff = '9M';
    const newDate = new Date(2006, 2, 20);
    expect(add(orgDate, diff)).toEqual(newDate);
  });

  it('returns a new date with 5 days added to the original', () => {
    const orgDate = new Date(2020, 1, 20);
    const diff = '5d';
    const newDate = new Date(2020, 1, 25);
    expect(add(orgDate, diff)).toEqual(newDate);
  });

  it('returns a new date with 2 weeks added to the original', () => {
    const orgDate = new Date(1970, 5, 20);
    const diff = '2w';
    const newDate = new Date(1970, 6, 4);
    expect(add(orgDate, diff)).toEqual(newDate);
  });

  it('returns a new date with 13 minutes added to the original', () => {
    const orgDate = new Date('December 25, 1994 03:24:00');
    const diff = '13m';
    const newDate = new Date('December 25, 1994 03:37:00');
    expect(add(orgDate, diff)).toEqual(newDate);
  });

  it('returns a new date with 100 seconds added to the original', () => {
    const orgDate = new Date('January 15, 1990 05:00:00');
    const diff = '100s';
    const newDate = new Date('January 15, 1990 05:01:40');
    expect(add(orgDate, diff)).toEqual(newDate);
  });

});

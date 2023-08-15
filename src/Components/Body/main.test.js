import { render, screen } from '@testing-library/react';

import Main from './Main';

describe('Main', () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              capsule_id: 'dragon1',
              capsule_serial: 'C101',
              details: 'Reentered after three weeks in orbit',
              landings: 1,
              missions: [{ name: 'COTS 1', flight: 7 }],
              original_launch: '2010-12-08T15:43:00.000Z',
              original_launch_unix: 1291822980,
              reuse_count: 0,
              status: 'retired',
              type: 'Dragon 1.0',
            },
          ]),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('renders Main component', async () => {
    render(<Main />);
    const linkElement = await screen.findByText(/dragon1/i);
    expect(linkElement).toBeInTheDocument();
  });
});

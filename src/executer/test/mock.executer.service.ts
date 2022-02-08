export const mockExecuterService = {
  executeCommand: jest.fn().mockReturnValue({
    status: 200,
    response: 'test',
  }),
};

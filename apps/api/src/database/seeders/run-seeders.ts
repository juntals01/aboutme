import dataSource from '../data-source';

async function runSeeders() {
  console.log('Initializing data source...');
  await dataSource.initialize();

  try {
    console.log('Running seeders...');

    // Add your seeders here
    // Example:
    // const userRepository = dataSource.getRepository(User);
    // await userRepository.save([
    //   { name: 'Admin', email: 'admin@example.com' },
    // ]);

    console.log('Seeders completed successfully.');
  } catch (error) {
    console.error('Error running seeders:', error);
    process.exit(1);
  } finally {
    await dataSource.destroy();
  }
}

runSeeders();

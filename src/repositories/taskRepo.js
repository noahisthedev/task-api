import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

// Find a task by ID
export async function findById(id) {
  const idAsInt = parseInt(id, 10);
  
  if (isNaN(idAsInt)) {
    const error = new Error("ID must be a number");
    error.statusCode = 400;
    error.details = ["ID must be a number"];
    throw error;
  }

  // 3. Use the integer ID for Prisma
  return prisma.task.findUnique({
    where: {
      id: idAsInt,
    },
  });
}


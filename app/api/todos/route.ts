import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET - Récupérer tous les todos
export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(todos)
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// POST - Créer un todo
export async function POST(request: NextRequest) {
  try {
    const { title } = await request.json()
    
    if (!title || !title.trim()) {
      return NextResponse.json({ error: 'Titre requis' }, { status: 400 })
    }

    const todo = await prisma.todo.create({
      data: { title: title.trim() }
    })

    return NextResponse.json(todo, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// PATCH - Mettre à jour un todo (toggle completed)
export async function PATCH(request: NextRequest) {
  try {
    const { id, completed } = await request.json()

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }

    const todo = await prisma.todo.update({
      where: { id },
      data: { completed }
    })

    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// DELETE - Supprimer un todo
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }

    await prisma.todo.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
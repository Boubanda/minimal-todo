'use client'

import { useState, useEffect } from 'react'

interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const res = await fetch('/api/todos')
      if (!res.ok) throw new Error('Erreur API')
      const data = await res.json()
      setTodos(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Erreur fetchTodos:', error)
      setTodos([])
    }
  }

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    setLoading(true)
    try {
      await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTodo })
      })
      setNewTodo('')
      await fetchTodos()
    } catch (error) {
      console.error('Erreur addTodo:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      await fetch('/api/todos', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, completed: !completed })
      })
      await fetchTodos()
    } catch (error) {
      console.error('Erreur toggleTodo:', error)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      await fetch('/api/todos', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      await fetchTodos()
    } catch (error) {
      console.error('Erreur deleteTodo:', error)
    }
  }

  const activeTodos = todos.filter(t => !t.completed)
  const completedTodos = todos.filter(t => t.completed)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8 pt-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 backdrop-blur-sm bg-white/50 rounded-3xl p-8 shadow-xl border border-white/20">
          <h1 className="text-5xl font-light text-gray-900 mb-3 tracking-tight">
            Minimal Todo
          </h1>
          <p className="text-base text-gray-600">
            Simple, élégant, efficace
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={addTodo} className="mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Ajouter une tâche..."
              className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all bg-white/80 backdrop-blur-sm shadow-sm"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !newTodo.trim()}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl hover:scale-105 font-medium"
            >
              {loading ? '⏳' : 'Ajouter'}
            </button>
          </div>
        </form>

        {/* Statistiques */}
        <div className="flex gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-gray-700">{activeTodos.length} active{activeTodos.length > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium text-gray-700">{completedTodos.length} terminée{completedTodos.length > 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Tâches actives */}
        {activeTodos.length > 0 && (
          <div className="mb-8">
            <div className="space-y-3">
              {activeTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="group flex items-center gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  <button
                    onClick={() => toggleTodo(todo.id, todo.completed)}
                    className="w-6 h-6 rounded-lg border-2 border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all flex-shrink-0"
                  />
                  <span className="flex-1 text-gray-800 font-medium">{todo.title}</span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all text-xl font-light w-8 h-8 flex items-center justify-center hover:bg-red-50 rounded-lg"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tâches terminées */}
        {completedTodos.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Terminées</h3>
            <div className="space-y-3">
              {completedTodos.map((todo) => (
                <div
                  key={todo.id}
                  className="group flex items-center gap-4 p-5 bg-gradient-to-r from-green-50/50 to-emerald-50/50 backdrop-blur-sm rounded-2xl border-2 border-green-100 hover:shadow-lg transition-all duration-200"
                >
                  <button
                    onClick={() => toggleTodo(todo.id, todo.completed)}
                    className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex-shrink-0 flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                  <span className="flex-1 text-gray-500 line-through">{todo.title}</span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all text-xl font-light w-8 h-8 flex items-center justify-center hover:bg-red-50 rounded-lg"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {todos.length === 0 && (
          <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-gray-200">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl font-medium text-gray-700 mb-2">Aucune tâche pour le moment</p>
            <p className="text-sm text-gray-500">Commencez par en ajouter une !</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 text-xs text-gray-500">
          Développé par <span className="font-semibold text-gray-700">Levi Junior BOUBANDA</span> 
        </div>
      </div>
    </main>
  )
}
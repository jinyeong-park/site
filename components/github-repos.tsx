"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, GitFork } from "lucide-react"
import Link from "next/link"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  language: string
}

export default function GitHubRepos({ username = "yourusername" }: { username: string }) {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)

        if (!response.ok) {
          throw new Error("GitHub API 요청에 실패했습니다")
        }

        const data = await response.json()
        setRepos(data)
        setLoading(false)
      } catch (err) {
        setError("저장소를 불러오는 중 오류가 발생했습니다")
        setLoading(false)
        console.error("Error fetching GitHub repos:", err)
      }
    }

    fetchRepos()
  }, [username])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="opacity-70 animate-pulse">
            <CardHeader>
              <CardTitle className="h-6 bg-muted rounded"></CardTitle>
              <CardDescription className="h-12 bg-muted rounded mt-2"></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-8 bg-muted rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card className="p-6 text-center">
        <p className="text-destructive">{error}</p>
        <p className="text-muted-foreground mt-2">
          GitHub API 요청 제한에 도달했거나 네트워크 문제가 발생했을 수 있습니다.
        </p>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <Card key={repo.id}>
          <CardHeader>
            <CardTitle className="text-lg">{repo.name}</CardTitle>
            <CardDescription>{repo.description || "설명이 없습니다"}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {repo.language && <Badge variant="outline">{repo.language}</Badge>}
              {repo.topics?.slice(0, 3).map((topic) => (
                <Badge key={topic} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                {repo.stargazers_count}
              </div>
              <div className="flex items-center">
                <GitFork className="h-4 w-4 mr-1" />
                {repo.forks_count}
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" asChild>
                <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  코드 보기
                </Link>
              </Button>
              {repo.homepage && (
                <Button size="sm" variant="outline" asChild>
                  <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    데모
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


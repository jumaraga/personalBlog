import type { NextFetchEvent, NextRequest } from 'next/server'
import cors from 'cors'
export function middleware(req: NextRequest, ev: NextFetchEvent) {
 cors()
 return 
}
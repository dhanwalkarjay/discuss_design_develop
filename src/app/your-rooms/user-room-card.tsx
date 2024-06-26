'use client';

import { TagsList } from "@/src/components/tags-list";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Room } from "@/src/db/schema";
import { GithubIcon, TrashIcon, PencilIcon } from "lucide-react";
import Link from "next/link";
import { splitTags } from "@/src/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog"
import { deleteRoomAction } from "./actions";


export function UserRoomCard({room}: {room: Room}) {
    return (
      <Card>
        <CardHeader className="relative">
          <Button className="absolute top-3 right-3" size="icon">
            <Link href={`/edit-room/${room.id}`}>
              <PencilIcon />
            </Link>
          </Button>
          <CardTitle>{room.name}</CardTitle>
          <CardDescription>{room.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
        <TagsList languages={splitTags(room.language)} />
          {room.githubRepo && (
            <Link href={room.githubRepo} className="flex items-center gap-2" target="_blank" rel="noopener noreferrer"><GithubIcon />Github Project</Link>
          )}
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button asChild><Link href={`/rooms/${room.id}`}>Join Room</Link></Button>
        <AlertDialog>
          <AlertDialogTrigger asChild><Button variant={"destructive"} ><TrashIcon />Delete Room</Button></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently remove the room
                and any data associated with it.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => {deleteRoomAction(room.id);}}>Yes, Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>


        </CardFooter>
      </Card>
    )
  }
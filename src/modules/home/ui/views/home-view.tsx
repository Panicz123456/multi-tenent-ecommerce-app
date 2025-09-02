import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export const HomeView = async () => {
  const payload = await getPayload({
    config: configPromise
  })

  const data = await payload.find({ 
    collection: "categories"
  })

  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}